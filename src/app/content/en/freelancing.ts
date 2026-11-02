import { SiteContent } from "../../interfaces";

export const freelancingPageContent: Pick<SiteContent, 'freelancingPage'> = {
  freelancingPage: {
    metaTitle: 'Freelance Senior Developer for Web & Software | Christian Dechant',
    metaDescription: 'Freelance senior full-stack developer from Germany: project development, team augmentation, interim CTO and team enablement. Personal, remote across Europe, from the idea to production use.',
    keywords: [
      'freelance developer',
      'freelance software developer',
      'senior full-stack developer freelance',
      'freelance Next.js developer',
      'freelance C# .NET developer',
      'interim CTO',
      'team augmentation developer',
      'MVP development',
      'freelancer Germany',
    ],
    breadcrumb: 'Freelancing',
    hero: {
      eyebrow: 'Freelancing',
      icon: 'handshake',
      title: 'Senior engineering that fits you —',
      titleHighlight: 'personal, focused, complete.',
      intro: 'As a freelance senior full-stack developer, I support companies, founders and development teams where it matters most: as the developer for your project, as reinforcement for your team or as a technical sparring partner. You work directly with me – from the first idea to software running in production.',
      primaryCta: 'Start a project',
      secondaryCta: 'See engagement models',
      facts: [
        { icon: 'public', label: 'Remote-first across Europe & internationally' },
        { icon: 'translate', label: 'German & English' },
        { icon: 'location_on', label: 'On-site in Fulda by arrangement' },
        { icon: 'event_available', label: 'Limited capacity for selected projects' },
      ],
    },
    models: {
      eyebrow: 'Engagement models',
      icon: 'tune',
      title: 'How I can support you',
      text: 'Every project is different. That’s why there is no standard package, but the model that fits your goal, your team and your timeline.',
      items: [
        {
          icon: 'deployed_code',
          accent: 'brand',
          title: 'Project development',
          text: 'I take ownership of delivering your project – from websites and web apps to custom software. With clear milestones, early releases and a complete hand-over.',
          points: [ 'Websites, web apps & portals', 'APIs, integrations & microservices', 'You own the source code & documentation' ],
        },
        {
          icon: 'group_add',
          accent: 'indigo',
          title: 'Team augmentation',
          text: 'Your team needs senior experience for a while? I get up to speed with existing codebases quickly and bring architecture, code quality and pace to your project.',
          points: [ 'Working within your processes & tools', 'Code reviews & architecture decisions', 'Knowledge transfer instead of dependency' ],
        },
        {
          icon: 'lightbulb',
          accent: 'amber',
          title: 'Interim CTO & founder advisory',
          text: 'For non-technical founders and young companies: sound technical decisions from the start – and the certainty that the source code stays in your hands.',
          points: [ 'MVP scoping & prioritization', 'Make-or-buy & tech stack selection', 'The source code stays in your hands' ],
        },
        {
          icon: 'groups',
          accent: 'emerald',
          title: 'Team enablement & process setup',
          text: 'Clean branching strategies, CI/CD pipelines, agile rituals and technical interviews for new hires – so your team delivers fast and safely, even without me.',
          points: [ 'CI/CD & branching strategies', 'Agile processes & code review culture', 'Technical interviews' ],
        },
      ],
    },
    workingModel: {
      eyebrow: 'How I work',
      icon: 'work',
      title: 'Freelancing alongside a permanent senior role',
      text: 'I’m also employed as a senior developer in industry. For you, that means current practice from large systems, independence from your project and a deliberately small number of clients.',
      items: [
        { icon: 'factory', title: 'Current industry practice', text: 'Microservices, cloud and quality processes from daily use – not textbook theory.' },
        { icon: 'diamond', title: 'Few clients, full attention', text: 'I only take on as many projects as I can handle with full care. We discuss capacity and start date openly in the intro call.' },
        { icon: 'event_note', title: 'Reliable planning', text: 'Fixed time slots, clear milestones and transparent communication instead of surprises on delivery day.' },
        { icon: 'forum', title: 'Direct line', text: 'You always talk to me. I answer questions personally, and we make decisions together.' },
      ],
    },
    process: {
      eyebrow: 'Process',
      icon: 'route',
      title: 'From your inquiry to production',
      text: 'Five clear steps – so you always know where your project stands.',
      steps: [
        { icon: 'chat', title: 'Intro call', text: 'We talk about your goal, your users and the scope – without obligation and in person.' },
        { icon: 'assignment', title: 'Scoping & quote', text: 'I define the scope, prioritize the MVP and prepare an individual quote with clear milestones.' },
        { icon: 'construction', title: 'Iterative delivery', text: 'Early, working increments and regular check-ins: you see progress instead of waiting for it.' },
        { icon: 'rocket_launch', title: 'Go-live', text: 'Delivered complete: authentication, error handling, tests, documentation and hand-over of the source code.' },
        { icon: 'support_agent', title: 'Operation & support', text: 'If you like, I stay on board: monitoring, updates and further development through support packages.' },
      ],
    },
    caseStudy: {
      eyebrow: 'Case study',
      icon: 'workspace_premium',
      title: 'JagdTausch: marketplace MVP from the idea to the finished platform',
      client: 'JagdTausch',
      period: 'July 2025 – Oct. 2026',
      text: 'As freelance lead developer, I designed and delivered the turnkey marketplace platform for used hunting equipment – a progressive web app with real-time chat, filter system and admin dashboard.',
      deliverables: [ 'Concept & architecture', 'Progressive web app', 'Real-time chat', 'Filter system', 'Admin dashboard' ],
      quote: {
        name: 'Caroline Grabowski',
        role: 'JagdTausch',
        text: 'Great collaboration — always reliable, punctual, and passionate about his work. He took his time with everything and did a fantastic job!',
      },
      linkLabel: 'Visit jagdtausch.de',
    },
    stack: {
      eyebrow: 'Technologies',
      icon: 'stacks',
      title: 'Tech stack',
      text: 'The technology follows your project. These are the areas where I have production experience:',
    },
    faq: {
      eyebrow: 'FAQ',
      icon: 'help',
      title: 'Questions about freelancing',
      text: 'The essentials of working together – and if your question is missing, just write to me.',
      items: [
        {
          question: 'How much capacity do you have for my project?',
          answer: 'I freelance alongside my permanent role and deliberately take on only a few projects at a time. How much time your project needs and when we can start is something we discuss openly in the intro call. I only make commitments I can keep.',
        },
        {
          question: 'Do you work remotely or on-site?',
          answer: 'Remote-first for clients in Germany, Austria, Switzerland and internationally, in German and English. On-site meetings in and around Fulda are possible by arrangement.',
        },
        {
          question: 'Who owns the source code?',
          answer: 'You do. Source code, documentation and access credentials are handed over completely, so you never depend on me.',
        },
        {
          question: 'How is the work billed?',
          answer: 'Every project is calculated individually. After the intro call, you receive a transparent quote with clear milestones. For ongoing collaboration, such as team augmentation, we agree on a suitable model.',
        },
        {
          question: 'Do you also provide support after go-live?',
          answer: 'Yes. Through support packages I take care of monitoring, security and dependency updates, functional testing and further development – with defined response times, guaranteed in the Premium package.',
        },
      ],
    },
    cta: {
      title: 'Ready for the next step?',
      text: 'Tell me about your project. I’ll reply personally within 24 hours.',
      cta: 'Start a project',
    },
    service: {
      name: 'Freelance senior full-stack development',
      serviceType: [ 'Software development', 'Web development', 'Team augmentation', 'Interim CTO', 'Technical consulting' ],
    },
  },
};
