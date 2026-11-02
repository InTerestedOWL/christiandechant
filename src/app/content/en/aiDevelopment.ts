import { SiteContent } from "../../interfaces";

export const aiDevelopmentPageContent: Pick<SiteContent, 'aiDevelopmentPage'> = {
  aiDevelopmentPage: {
    metaTitle: 'AI Development & Consulting: Agents, MCP & AI Integration | Christian Dechant',
    metaDescription: 'AI development and consulting: AI features in software, custom agents and MCP servers, AI audits with governance for data protection and IP, and 1:1 coaching for developers.',
    keywords: [
      'AI development',
      'AI consulting',
      'AI integration software',
      'AI agent development',
      'MCP server development',
      'Claude Code coaching',
      'AI governance GDPR',
      'local AI Ollama',
      'freelance AI engineer',
    ],
    breadcrumb: 'AI Development',
    hero: {
      eyebrow: 'AI Development',
      icon: 'psychology',
      title: 'AI that works in everyday use —',
      titleHighlight: 'secure, measurable, under control.',
      intro: 'I use AI where it adds real value: as a feature in your product, as an agent with access to your systems, or as a tool in your team’s day-to-day development. No hype, just craft – with clear guardrails for data protection and quality.',
      primaryCta: 'Start an AI project',
      secondaryCta: 'See services',
      facts: [
        { icon: 'smart_toy', label: 'Claude, OpenAI & local models' },
        { icon: 'hub', label: 'Custom MCP servers' },
        { icon: 'policy', label: 'Data protection & IP in focus' },
        { icon: 'school', label: '1:1 coaching for developers' },
      ],
    },
    services: {
      eyebrow: 'Services',
      icon: 'auto_awesome',
      title: 'Four ways to use AI sensibly',
      text: 'Whether a new feature, an internal agent or faster development: we start with the use case that makes the biggest difference for you.',
      items: [
        {
          icon: 'smart_toy',
          accent: 'brand',
          title: 'AI features in your product',
          text: 'Assistants, summaries, text generation or classification – integrated directly into your existing application, with clean interfaces instead of prompt tinkering.',
          points: [ 'Integration of Claude, OpenAI or local models', 'Robust interfaces with error handling', 'Data flow defined up front' ],
        },
        {
          icon: 'hub',
          accent: 'indigo',
          title: 'Agents & MCP servers',
          text: 'Custom MCP servers connect databases, APIs and internal tools to AI agents. That way, agents work with your real data – with clearly limited permissions.',
          points: [ 'MCP servers for your systems', 'Agent workflows for development & operations', 'Need-to-know permissions' ],
        },
        {
          icon: 'policy',
          accent: 'emerald',
          title: 'AI audit & governance',
          text: 'Where do agents really save time, and where do they hurt? I analyse your development processes and set clear guidelines for using AI tools safely.',
          points: [ 'Engineering bottleneck audit', 'Guidelines for data protection & IP', 'Cloud model or local with Ollama' ],
        },
        {
          icon: 'terminal',
          accent: 'amber',
          title: '1:1 coaching for developers',
          text: 'Claude Code, terminal agents and MCP in real project work: you learn to ship faster while keeping full architectural control.',
          points: [ 'Context windows & sub-tasking', 'Building your own MCP servers', 'TDD as a guardrail for AI code' ],
        },
      ],
    },
    principles: {
      eyebrow: 'No hype, just craft',
      icon: 'verified',
      title: 'How I use AI',
      text: 'AI is a tool, not an end in itself. These principles apply to every project.',
      items: [
        { icon: 'person', title: 'Humans decide', text: 'Agents suggest, humans decide. Code reviews and accountability stay with the team.' },
        { icon: 'shield_lock', title: 'Data protection from day one', text: 'We define up front which data goes to which model – using locally run models where needed.' },
        { icon: 'query_stats', title: 'Measurable value', text: 'We start where AI demonstrably saves time and check the result – instead of AI at any cost.' },
        { icon: 'fact_check', title: 'Tests as guardrails', text: 'Automated tests safeguard AI-generated code before it goes into production.' },
      ],
    },
    process: {
      eyebrow: 'Process',
      icon: 'route',
      title: 'From use case to production',
      text: 'Start small, learn fast, deliver complete.',
      steps: [
        { icon: 'chat', title: 'Initial call', text: 'We talk about your goals, data and constraints – free of obligation and in person.' },
        { icon: 'search', title: 'Analysis', text: 'I review processes, data and systems and find the use case with the biggest value.' },
        { icon: 'rocket_launch', title: 'Pilot', text: 'One concrete use case gets up and running quickly – so you see early on what AI can do for you.' },
        { icon: 'construction', title: 'Rollout & handover', text: 'Production use with tests, documentation and guidelines for safe operation.' },
        { icon: 'school', title: 'Enablement', text: 'If you like, I coach your team so it can keep working with the new tools on its own.' },
      ],
    },
    reference: {
      title: 'AI in production: WayVenture',
      text: 'In my travel app WayVenture, AI automatically turns waypoints and trip data into a readable travel timeline – an AI feature in a live app.',
      cta: 'Explore WayVenture',
    },
    faq: {
      eyebrow: 'FAQ',
      icon: 'help',
      title: 'Questions about AI projects',
      text: 'The essentials on data protection, tools and process – and if your question is missing, just write to me.',
      items: [
        {
          question: 'How much does an AI project or coaching cost?',
          answer: 'Every project is calculated individually. After the initial call, you receive a transparent quote with clear milestones.',
        },
        {
          question: 'Is my data sent to AI providers?',
          answer: 'Only the data we agree on beforehand. Where needed, we use locally run models, for example with Ollama, so your data never leaves your network.',
        },
        {
          question: 'Which models and tools do you work with?',
          answer: 'Among others, Claude and Claude Code, the OpenAI API, local models via Ollama and the Model Context Protocol (MCP). The choice depends on your requirements for quality, data protection and operations.',
        },
        {
          question: 'Will AI replace my developers?',
          answer: 'No. AI makes experienced developers faster. Architecture, code reviews and accountability stay with people – which is exactly what the audit and coaching focus on.',
        },
        {
          question: 'Is the coaching remote?',
          answer: 'Yes, remote in German or English. On site in Fulda is also possible by arrangement.',
        },
      ],
    },
    cta: {
      title: 'Let’s find out what AI can do for you',
      text: 'Tell me about your project. I’ll get back to you personally within 24 hours with a first assessment.',
      cta: 'Start an AI project',
    },
    service: {
      name: 'AI development & consulting',
      serviceType: [ 'AI integration', 'AI agents', 'MCP server development', 'AI consulting', 'Developer coaching' ],
      catalogName: 'AI services',
    },
  },
};
