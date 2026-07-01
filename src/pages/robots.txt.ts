import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(
    `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ChatGPT-User
Allow: /

Sitemap: https://grandrapidsminnesota.com/sitemap-index.xml
`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
};
