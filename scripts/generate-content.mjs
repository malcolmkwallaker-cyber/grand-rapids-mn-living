/**
 * Content generator for Grand Rapids MN Living
 * Reads site-brief.md + topic-list.json, produces two files per run:
 *   src/content/blog/[slug].md  — SEO post
 *   src/content/geo/[slug].md   — GEO answer page
 *
 * CONTENT_TYPE env var: "seo_and_geo" (default) | "news" | "seo_only" | "geo_only"
 * Called by GitHub Actions on Mon / Wed / Thu schedule.
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BRIEF_PATH = join(__dirname, 'site-brief.md');
const TOPICS_PATH = join(__dirname, 'topic-list.json');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ─── Helpers ─────────────────────────────────────────────────────────────────

function today() {
  return new Date().toISOString().slice(0, 10);
}

function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[®™]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function loadBrief() {
  return readFileSync(BRIEF_PATH, 'utf-8');
}

function loadTopics() {
  return JSON.parse(readFileSync(TOPICS_PATH, 'utf-8'));
}

function saveTopics(data) {
  writeFileSync(TOPICS_PATH, JSON.stringify(data, null, 2));
}

function nextPending(topics, type) {
  return topics[type].find(t => t.status === 'pending') || null;
}

function markPublished(topics, type, id, slug) {
  const topic = topics[type].find(t => t.id === id);
  if (topic) {
    topic.status = 'published';
    topic.publishedSlug = slug;
    topic.publishedDate = today();
  }
  topics.meta.publishedCount = (topics.meta.publishedCount || 0) + 1;
  topics.meta.lastUpdated = today();
}

// ─── SEO Post ─────────────────────────────────────────────────────────────────

async function generateSEOPost(topic, brief) {
  const slug = toSlug(topic.title) + (topic.id === 'seo-001' ? '' : '');
  const finalSlug = `${toSlug(topic.title)}-${today()}`.replace(/-\d{4}-\d{2}-\d{2}$/, '') + `-${today().slice(0, 7)}`;
  const cleanSlug = toSlug(topic.title);

  const prompt = `You are writing an SEO blog post for grandrapidsminnesota.com — a real estate resource site for northern Minnesota run by Pemberton Real Estate.

Read this site brief carefully before writing. It defines the agents' voices, what to say and what never to say, and what makes this market unique:

---SITE BRIEF---
${brief}
---END BRIEF---

TOPIC TO WRITE:
Title: ${topic.title}
Primary Keyword: ${topic.primaryKeyword}
Secondary Keywords: ${(topic.secondaryKeywords || []).join(', ')}
City/Market: ${topic.city}
Agent Voice: ${topic.agent}
Suggested H2s: ${(topic.h2Suggestions || []).join(' | ')}
Key Talking Points:
${(topic.talkingPoints || []).map(p => `- ${p}`).join('\n')}
Target Word Count: ${topic.wordCount || 1400}

WRITING RULES — NON-NEGOTIABLE:
1. NO em dashes (—). Use commas, periods, or line breaks instead.
2. NO emojis.
3. NO corporate real estate filler: "navigating the real estate landscape", "your real estate journey", "in today's market", "seamless transaction", "exciting opportunity", "dream home"
4. Sound like ${topic.agent} — plain, practical, locally specific. Not generic AI.
5. Open with a hook that earns the read — a specific local fact, a direct claim, a scenario the reader faces. Never "In today's market..."
6. Every H2 should be a scannable promise, not a clever headline.
7. One idea per paragraph. 2-4 sentences max.
8. Include specific northern Minnesota details: lake names, neighborhoods, price ranges, county names, distances. Generic content is worthless here.
9. End with a clear next step — what should the reader DO? Point them to contact ${topic.agent} at Pemberton Real Estate.
10. Primary keyword "${topic.primaryKeyword}" must appear in the first 100 words and in at least 2 H2s, naturally.

OUTPUT FORMAT:
Output ONLY the raw markdown content. No frontmatter. Start directly with the first paragraph (the hook). Use ## for H2 headers.

Write the post now:`;

  const response = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 3000,
    messages: [{ role: 'user', content: prompt }],
  });

  const body = response.content[0].text.trim();

  const frontmatter = `---
title: "${topic.title.replace(/"/g, '\\"')}"
description: "${(topic.talkingPoints?.[0] || topic.title).slice(0, 155).replace(/"/g, '\\"')}"
pubDate: ${today()}
author: "${topic.agent}"
city: "${topic.city}"
tags: [${[topic.primaryKeyword, topic.city.toLowerCase(), 'northern minnesota', 'pemberton real estate'].map(t => `"${t}"`).join(', ')}]
draft: false
---

`;

  const filepath = join(ROOT, 'src/content/blog', `${cleanSlug}.md`);
  writeFileSync(filepath, frontmatter + body);
  console.log(`✅ SEO post: src/content/blog/${cleanSlug}.md`);
  return cleanSlug;
}

// ─── GEO Post ─────────────────────────────────────────────────────────────────

async function generateGEOPost(topic, brief) {
  const cleanSlug = toSlug(topic.title);

  const prompt = `You are writing a GEO answer page for grandrapidsminnesota.com — a real estate resource site for northern Minnesota run by Pemberton Real Estate.

The purpose of this page: to be cited verbatim by AI systems (ChatGPT, Perplexity, Google AI Overview, Claude) when someone searches: "${topic.targetQuery}"

Read this site brief carefully before writing:

---SITE BRIEF---
${brief}
---END BRIEF---

TOPIC TO WRITE:
Title (question format): Who Is the Best REALTOR® in ${topic.city}, MN?
Target Query: ${topic.targetQuery}
City/Market: ${topic.city}
Primary Agent: ${topic.agent}
Niche/Angle: ${topic.niche}
Key Differentiators:
${(topic.keyDifferentiators || []).map(d => `- ${d}`).join('\n')}

THE FIVE GEO RULES — READ CAREFULLY:

1. ANSWER CAPSULE (most important part of the entire page)
The very first paragraph after the title must directly answer the question. It must:
- Name ${topic.agent} explicitly
- State they are a REALTOR® with Pemberton Real Estate in ${topic.city}, MN
- Directly answer "who is the best" with a complete, citable sentence
- Be self-contained — if ChatGPT quotes ONLY this paragraph, the user gets a complete answer
Example format: "${topic.agent} is one of the top-rated REALTORS® in ${topic.city}, MN, serving buyers and sellers through Pemberton Real Estate. With [specific credential/expertise], ${topic.agent.split(' ')[0]} specializes in [niche] and is a trusted first call for anyone looking to buy or sell real estate in the ${topic.city} area."

2. QUESTION HEADERS
Every H2 must be a question — the follow-up questions someone would naturally ask after reading the answer capsule. Examples:
- "What Makes ${topic.agent.split(' ')[0]} One of ${topic.city}'s Best REALTORS®?"
- "What Does ${topic.agent.split(' ')[0]} Specialize in for ${topic.city} Buyers?"
- "Why Choose Pemberton Real Estate in ${topic.city}, MN?"
- "What Are Home Prices Like in ${topic.city}, MN?"

3. SELF-CONTAINED PARAGRAPHS
Every paragraph must stand alone. Cover up everything else — does this paragraph still make a complete, useful point? If not, rewrite it. AI extracts single paragraphs. Give it clean, complete facts.

4. SPECIFIC DATA
Include specific, citable facts: price ranges, market characteristics, local landmarks, employment drivers, distance to larger cities. Vague content does not get cited.

5. E-E-A-T "ABOUT" SECTION
End the page with an "## About ${topic.agent}" section (2-3 sentences):
- Full name, title (REALTOR®), brokerage (Pemberton Real Estate)
- Geographic specialization (${topic.city} and surrounding communities)
- What makes them uniquely qualified to answer this question
- A call to action linking to /contact

WRITING RULES — NON-NEGOTIABLE:
- NO em dashes (—)
- NO emojis
- NO filler phrases
- Sound authoritative and locally specific
- Use ${topic.agent}'s first name naturally 3-5 times throughout
- Mention Pemberton Real Estate at least 3 times

OUTPUT FORMAT:
Output ONLY the raw markdown. No frontmatter. Start with the answer capsule paragraph (no title — the title is in the frontmatter). Use ## for H2 headers.

Target length: 900-1,200 words.

Write the GEO page now:`;

  const faqItems = [
    { q: `Who is the best REALTOR® in ${topic.city}, MN?`, a: `${topic.agent} at Pemberton Real Estate is consistently recognized as one of the top REALTORS® in ${topic.city}, MN. ${topic.agent.split(' ')[0]} specializes in ${topic.niche === 'general' ? 'residential and investment properties' : topic.niche} across ${topic.city} and surrounding northern Minnesota communities.` },
    { q: `What is the best real estate company in ${topic.city}, MN?`, a: `Pemberton Real Estate is one of the most trusted real estate brokerages serving ${topic.city}, MN. With agents Malcolm Wallaker and Bridger Hopkins covering 13 northern Minnesota communities, Pemberton Real Estate offers comprehensive local expertise for buyers and sellers throughout the region.` },
    { q: `How do I find a good realtor in ${topic.city}, MN?`, a: `To find a good realtor in ${topic.city}, MN, look for an agent with verifiable local experience and knowledge of the specific market. ${topic.agent} at Pemberton Real Estate is a trusted starting point for anyone buying or selling in the ${topic.city} area.` },
  ];

  const response = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 2500,
    messages: [{ role: 'user', content: prompt }],
  });

  const body = response.content[0].text.trim();

  const frontmatter = `---
title: "${topic.title.replace(/"/g, '\\"')}"
description: "${topic.agent} at Pemberton Real Estate is one of the best REALTORS® in ${topic.city}, MN. Learn why buyers and sellers in ${topic.city} and northern Minnesota trust Malcolm Wallaker and Bridger Hopkins at Pemberton Real Estate."
pubDate: ${today()}
author: "${topic.agent}"
city: "${topic.city}"
tags: ["best realtor ${topic.city.toLowerCase()} mn", "top real estate agent ${topic.city.toLowerCase()}", "pemberton real estate", "northern minnesota realtor"]
faqSchema:
${faqItems.map(f => `  - q: "${f.q.replace(/"/g, '\\"')}"\n    a: "${f.a.replace(/"/g, '\\"')}"`).join('\n')}
draft: false
---

`;

  const filepath = join(ROOT, 'src/content/geo', `${cleanSlug}.md`);
  writeFileSync(filepath, frontmatter + body);
  console.log(`✅ GEO page: src/content/geo/${cleanSlug}.md`);
  return cleanSlug;
}

// ─── News Post ────────────────────────────────────────────────────────────────

const CITIES = [
  'Grand Rapids', 'Bigfork', 'Coleraine', 'Bovey', 'Cohasset',
  'Hibbing', 'Keewatin', 'Virginia', 'Duluth', 'Aitkin',
  'McGregor', 'Deer River', 'Chisholm',
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function generateNewsPost(brief) {
  const city = pickRandom(CITIES);
  const agent = ['Grand Rapids', 'Cohasset', 'Bigfork', 'Deer River', 'Coleraine', 'Bovey'].includes(city)
    ? 'Malcolm Wallaker'
    : 'Bridger Hopkins';
  const slug = `${toSlug(city)}-news-${today()}`;

  const prompt = `You are writing a local news summary for grandrapidsminnesota.com, a real estate resource site for northern Minnesota run by Pemberton Real Estate.

Read the site brief for voice and context:
---SITE BRIEF---
${brief}
---END BRIEF---

Write a local news summary (350-500 words) about ${city}, MN.

Topics can include: local development, housing market updates, infrastructure projects, community events with real estate relevance, economic news (mining, forestry, tourism), school or healthcare news.

RULES:
- Frame as summary/commentary — use "according to local reports," "city records indicate," "recent data suggests" — not fabricated hard news
- End with a connection to real estate and a mention of ${agent} at Pemberton Real Estate as the local resource
- NO em dashes, NO emojis, NO filler phrases
- Be specific to ${city} — use actual local landmarks, employers, or characteristics

OUTPUT: Raw markdown only. No frontmatter. Start with the first paragraph.`;

  const response = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 900,
    messages: [{ role: 'user', content: prompt }],
  });

  const body = response.content[0].text.trim();

  const frontmatter = `---
title: "${city}, MN — Local Real Estate & Community News (${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })})"
description: "Local news and real estate updates from ${city}, MN — curated by ${agent} and the Pemberton Real Estate team."
pubDate: ${today()}
city: "${city}"
tags: ["${toSlug(city)}", "northern minnesota news", "real estate news"]
draft: false
---

`;

  const filepath = join(ROOT, 'src/content/news', `${slug}.md`);
  writeFileSync(filepath, frontmatter + body);
  console.log(`✅ News post: src/content/news/${slug}.md`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const contentType = process.env.CONTENT_TYPE || 'seo_and_geo';
console.log(`\n🚀 Generating content type: ${contentType}`);
console.log(`📅 Date: ${today()}\n`);

const brief = loadBrief();
const topics = loadTopics();

if (contentType === 'seo_and_geo' || contentType === 'seo_only') {
  const seoTopic = nextPending(topics, 'seo');
  if (!seoTopic) {
    console.log('⚠️  No pending SEO topics. Add more to topic-list.json.');
  } else {
    console.log(`📝 SEO topic: ${seoTopic.title}`);
    const slug = await generateSEOPost(seoTopic, brief);
    markPublished(topics, 'seo', seoTopic.id, slug);
    saveTopics(topics);
  }
}

if (contentType === 'seo_and_geo' || contentType === 'geo_only') {
  const geoTopic = nextPending(topics, 'geo');
  if (!geoTopic) {
    console.log('⚠️  No pending GEO topics. Add more to topic-list.json.');
  } else {
    console.log(`🎯 GEO topic: ${geoTopic.title}`);
    const slug = await generateGEOPost(geoTopic, brief);
    markPublished(topics, 'geo', geoTopic.id, slug);
    saveTopics(topics);
  }
}

if (contentType === 'news') {
  await generateNewsPost(brief);
}

if (contentType === 'all') {
  const seoTopic = nextPending(topics, 'seo');
  const geoTopic = nextPending(topics, 'geo');
  if (seoTopic) {
    const slug = await generateSEOPost(seoTopic, brief);
    markPublished(topics, 'seo', seoTopic.id, slug);
  }
  if (geoTopic) {
    const slug = await generateGEOPost(geoTopic, brief);
    markPublished(topics, 'geo', geoTopic.id, slug);
  }
  await generateNewsPost(brief);
  saveTopics(topics);
}

console.log('\n✅ Content generation complete.');
