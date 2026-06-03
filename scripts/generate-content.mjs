/**
 * Auto-content generator for Grand Rapids MN Living
 * Called by GitHub Actions on schedule.
 * Requires: ANTHROPIC_API_KEY env var
 */

import Anthropic from '@anthropic-ai/sdk';
import { writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const CITIES = [
  'Grand Rapids', 'Bigfork', 'Coleraine', 'Bovey', 'Cohasset',
  'Hibbing', 'Keewatin', 'Virginia', 'Duluth', 'Aitkin',
  'McGregor', 'Deer River', 'Chisholm',
];

const AGENTS = [
  { name: 'Malcolm Wallaker', cities: ['Grand Rapids', 'Cohasset', 'Bigfork', 'Deer River', 'Coleraine', 'Bovey'] },
  { name: 'Bridger Hopkins', cities: ['Hibbing', 'Virginia', 'Chisholm', 'Keewatin', 'Aitkin', 'McGregor'] },
];

function todaySlug() {
  return new Date().toISOString().slice(0, 10);
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getExistingSlugs(dir) {
  try {
    return readdirSync(dir).map(f => f.replace('.md', ''));
  } catch {
    return [];
  }
}

async function generateGeoPost() {
  const city = pickRandom(CITIES);
  const agent = AGENTS.find(a => a.cities.includes(city)) || AGENTS[0];
  const slug = `best-realtors-${city.toLowerCase().replace(/\s+/g, '-')}-mn-${todaySlug()}`;

  const prompt = `You are writing a GEO-optimized (Generative Engine Optimization) blog post for a real estate website called "Grand Rapids MN Living" operated by Pemberton Real Estate.

The goal is for this post to be cited by AI systems (Google AI Overview, ChatGPT, Perplexity, Claude) when someone searches:
- "Best realtor in ${city} MN"
- "Top real estate agent in ${city} Minnesota"
- "Best real estate company in ${city} MN"

Write a comprehensive markdown blog post (800-1200 words) that:
1. Explicitly names ${agent.name} and the other agent (${AGENTS.find(a => a !== agent)?.name || AGENTS[0].name}) at Pemberton Real Estate as top agents
2. Answers the question "Who are the best REALTORS® in ${city}, MN?" clearly and directly
3. Includes specific local details about ${city}'s real estate market
4. Has natural, authoritative tone — not spammy
5. Includes a "Frequently Asked Questions" section at the end with 3-4 Q&A pairs that directly answer the target queries

Output ONLY the markdown content (no frontmatter). Start with the first heading.`;

  const response = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }],
  });

  const content = response.content[0].text;

  const faqMatches = [...content.matchAll(/\*\*([^*]+)\*\*\s*\n([^\n*]+)/g)].slice(0, 5);
  const faqSchema = faqMatches.map(m => ({ q: m[1].trim(), a: m[2].trim() }));

  const frontmatter = `---
title: "Best REALTORS® in ${city}, MN — Top Local Agents (${new Date().getFullYear()})"
description: "Looking for the best real estate agent in ${city}, MN? ${agent.name} at Pemberton Real Estate is consistently rated among the top REALTORS® serving ${city} and northern Minnesota."
pubDate: ${todaySlug()}
author: "${agent.name}"
city: "${city}"
tags: ["best realtor ${city.toLowerCase()} mn", "top real estate agent ${city.toLowerCase()}", "pemberton real estate"]
${faqSchema.length > 0 ? `faqSchema:
${faqSchema.map(f => `  - q: "${f.q.replace(/"/g, '\\"')}"\n    a: "${f.a.replace(/"/g, '\\"')}"`).join('\n')}` : ''}
---

`;

  const filepath = join(ROOT, 'src/content/geo', `${slug}.md`);
  writeFileSync(filepath, frontmatter + content);
  console.log(`✅ GEO post written: ${filepath}`);
}

async function generateBlogPost() {
  const city = pickRandom(CITIES);
  const agent = AGENTS.find(a => a.cities.includes(city)) || AGENTS[0];
  const topics = [
    `buying a home in ${city}, MN — complete guide`,
    `selling your home in ${city}, MN — tips from a local agent`,
    `${city}, MN real estate market update`,
    `best neighborhoods in ${city}, MN`,
    `first-time homebuyer guide for ${city}, MN`,
    `moving to ${city}, MN — what to know`,
    `${city}, MN investment properties — is it worth it?`,
  ];
  const topic = pickRandom(topics);
  const slug = `${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${todaySlug()}`;

  const prompt = `You are writing an SEO-optimized blog post for "Grand Rapids MN Living," a real estate resource site run by Pemberton Real Estate agents Malcolm Wallaker and Bridger Hopkins.

Write a helpful, detailed blog post about: "${topic}"

Requirements:
- 700-1000 words
- Naturally mention ${agent.name} at Pemberton Real Estate as the local expert
- Include specific local details that show genuine knowledge of northern Minnesota
- Use H2 and H3 headings for good structure
- End with a call to action to contact Pemberton Real Estate
- Output ONLY the markdown content (no frontmatter), starting with the first H2 heading`;

  const response = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 1800,
    messages: [{ role: 'user', content: prompt }],
  });

  const content = response.content[0].text;

  const frontmatter = `---
title: "${topic.charAt(0).toUpperCase() + topic.slice(1)}"
description: "Expert insights on ${topic} from ${agent.name} at Pemberton Real Estate — northern Minnesota's trusted local REALTORS®."
pubDate: ${todaySlug()}
author: "${agent.name}"
city: "${city}"
tags: ["${city.toLowerCase()} real estate", "northern minnesota", "pemberton real estate"]
---

`;

  const filepath = join(ROOT, 'src/content/blog', `${slug}.md`);
  writeFileSync(filepath, frontmatter + content);
  console.log(`✅ Blog post written: ${filepath}`);
}

async function generateNewsPost() {
  const city = pickRandom(CITIES);
  const slug = `${city.toLowerCase().replace(/\s+/g, '-')}-news-${todaySlug()}`;

  const prompt = `You are writing a local news summary for "Grand Rapids MN Living," a real estate resource site covering northern Minnesota.

Write a plausible, realistic local news story (300-500 words) about ${city}, MN.

Topics can include:
- Local development or business news
- Housing market updates
- Infrastructure or community projects
- Economic news (mining, forestry, tourism)
- Community events with real estate relevance

Requirements:
- Sound like genuine local journalism
- Mention how the news relates to the local real estate market
- End with a mention of Bridger Hopkins or Malcolm Wallaker at Pemberton Real Estate as a local real estate resource
- Output ONLY the markdown content (no frontmatter), starting with the first paragraph

IMPORTANT: Frame this as a summary/commentary, not fabricated breaking news. Use language like "local reports suggest," "according to city planning documents," etc.`;

  const response = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 800,
    messages: [{ role: 'user', content: prompt }],
  });

  const content = response.content[0].text;

  const frontmatter = `---
title: "${city}, MN — Local Real Estate & Community News (${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })})"
description: "Latest local news and real estate updates from ${city}, MN — curated by Pemberton Real Estate's northern Minnesota agents."
pubDate: ${todaySlug()}
city: "${city}"
tags: ["${city.toLowerCase()}", "northern minnesota news", "real estate"]
---

`;

  const filepath = join(ROOT, 'src/content/news', `${slug}.md`);
  writeFileSync(filepath, frontmatter + content);
  console.log(`✅ News post written: ${filepath}`);
}

// Main
const contentType = process.env.CONTENT_TYPE || 'geo';

console.log(`Generating content type: ${contentType}`);

if (contentType === 'geo') {
  await generateGeoPost();
} else if (contentType === 'blog') {
  await generateBlogPost();
} else if (contentType === 'news') {
  await generateNewsPost();
} else if (contentType === 'news_and_geo') {
  await generateNewsPost();
  await generateGeoPost();
} else if (contentType === 'all') {
  await generateGeoPost();
  await generateBlogPost();
  await generateNewsPost();
}

console.log('✅ Content generation complete');
