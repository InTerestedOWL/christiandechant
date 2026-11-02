import { SiteContent } from "../../interfaces";

export const aboutPageContent: Pick<SiteContent, 'aboutPage'> = {
  aboutPage: {
    metaTitle: 'About: Christian Dechant, Senior Full-Stack Developer | Christian Dechant',
    metaDescription: 'Christian Dechant: senior full-stack developer and AI consultant from the Fulda region, Germany, M.Sc. Applied Computer Science, founder of WayVenture and squad leader in the volunteer fire brigade. Career, values and master’s thesis.',
    keywords: [
      'Christian Dechant',
      'senior full-stack developer Germany',
      'freelance developer Fulda',
      'software developer career',
      'master thesis Kubernetes zero trust',
      'founder WayVenture',
    ],
    breadcrumb: 'About',
    hero: {
      eyebrow: 'About',
      icon: 'person',
      title: 'Christian Dechant —',
      titleHighlight: 'senior developer with a founder’s perspective.',
      intro: 'I’ve been building software for more than nine years – in industry, as a founder and as a freelancer. What drives me is turning an idea into a product that works reliably in everyday use. Alongside my permanent role at *Strauss GmbH & Co. KG*, I work directly with a few selected clients.',
      primaryCta: 'Start a project',
      secondaryCta: 'See my career',
      facts: [
        { icon: 'school', label: 'M.Sc. Applied Computer Science' },
        { icon: 'history_edu', label: '9+ years of software engineering' },
        { icon: 'explore', label: 'Founder of WayVenture' },
        { icon: 'location_on', label: 'Fulda region, remote-first' },
      ],
    },
    story: {
      eyebrow: 'My path',
      icon: 'route',
      title: 'From working student to senior developer and founder',
      text: 'Three perspectives that benefit every project today.',
      paragraphs: [
        'I started out as a working student: during my studies, I was already customising CRM systems for clients and co-developing a reporting tool for theatres and event organisers. My master’s in Applied Computer Science at Fulda University of Applied Sciences gave me scientific depth – my thesis is about securing Kubernetes clusters with a zero-trust approach.',
        'As a founder, I know what it’s like to set the right priorities on a limited budget: first with an indoor navigation system based on Bluetooth Low Energy, today with my travel app WayVenture. I bring this perspective to every client project.',
        'At *Strauss GmbH & Co. KG*, I build core microservices with C# .NET and Angular that step by step replace a legacy system. As a freelancer, I deliver projects like the JagdTausch marketplace and bring the principles of classic software engineering to AI workflows and MCP servers.',
      ],
    },
    values: {
      eyebrow: 'Values',
      icon: 'favorite',
      title: 'What you can count on',
      text: 'This is how I work – in every project, with every client.',
      items: [
        { icon: 'handshake', title: 'Honest & transparent', text: 'I tell you what works and what doesn’t – even when it isn’t the convenient answer. I only make promises I can keep.' },
        { icon: 'schedule', title: 'Reliable', text: 'Agreements and deadlines hold. If something gets stuck, you hear it from me early and directly.' },
        { icon: 'task_alt', title: 'Quality with a sense of proportion', text: 'Complete doesn’t mean bloated: the right things done thoroughly rather than everything done halfway.' },
        { icon: 'lightbulb', title: 'Curious', text: 'I try new technologies like AI agents early – and only use them once they’ve proven themselves.' },
      ],
    },
    product: {
      title: 'My own product: WayVenture',
      text: 'As the founder of WayVenture, I know both sides: the technology and the decisions that make a product succeed.',
      cta: 'Explore WayVenture',
    },
    cta: {
      title: 'Let’s get to know each other',
      text: 'Tell me about your project. I’ll get back to you personally within 24 hours.',
      cta: 'Book an initial call',
    },
  },
};
