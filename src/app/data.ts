import {
  IAiConsultingTrack,
  IContactBox,
  IExperience,
  IHeaderLink,
  IPortfolioItem,
  ISkill,
  ISocial,
  ITechnology,
  IVoluntaryWork,
  IWayVentureFaq,
  IWayVentureFeature,
  IWayVentureUpcoming
} from "./interfaces";

export const headerLinks: IHeaderLink[] = [
  { href: '/#about', title: 'About' },
  { href: '/#wayventure', title: 'WayVenture' },
  { href: '/#pricing', title: 'Offers' },
  { href: '/#ai-consulting', title: 'Consulting' },
  { href: '/#portfolio', title: 'Portfolio' },
  { href: '/#tools', title: 'tools' },
  { href: '/#work', title: 'Work' },
  { href: '/#voluntary', title: 'Voluntary' },
  { href: '/#statistics', title: 'Statistics' },
  { href: '/#blog', title: 'Blog' },
  { href: '/#contact', title: 'Contact' },
];

export const socials: ISocial[] = [
  {
    name: 'linkedin',
    icon: 'bxl-linkedin',
    url: 'https://www.linkedin.com/in/christian-dechant-a64b7917b/',
    classAttribute: 'pl-4'
  },
  {
    name: 'XING',
    icon: 'bxl-xing',
    url: 'https://www.xing.com/profile/Christian_Dechant6/web_profiles?expandNeffi=true',
    classAttribute: 'pl-4'
  },
  {
    name: 'GitHub',
    icon: 'bxl-github',
    url: 'https://github.com/InTerestedOWL',
    classAttribute: 'pl-4'
  },
  {
    name: 'YouTube',
    icon: 'bxl-youtube',
    url: 'https://youtube.com/@interestedowl',
    classAttribute: 'pl-4'
  }
];

export const technologies: ITechnology[] = [
  { icon: "laravel.svg", name: "Laravel" },
  { icon: "vue.svg", name: "Vue.js" },
  { icon: "angular-icon-seeklogo.svg", name: "Angular" },
  { icon: "ionic_Logo.svg", name: "Ionic" },
  { icon: "symfony.svg", name: "Symfony" },
  { icon: "icons8-.net.svg", name: ".NET" },
  { icon: "cypress-1.svg", name: "Cypress" },
  { icon: "nextjs.svg", name: "Next.js" },
  { icon: "node-js-svgrepo-com.svg", name: "Node.js" },
  { icon: "docker-mark-blue.svg", name: "Docker" },
  { icon: "tailwindcss.svg", name: "Tailwind CSS" },
  { icon: "php.svg", name: "PHP" },
  { icon: "typescript.svg", name: "TypeScript" },
  { icon: "mongodb.svg", name: "MongoDB" },
  { icon: "postgresql.svg", name: "PostgreSQL" },
  { icon: "mysql.svg", name: "MySQL" },
  { icon: "kubernetes.svg", name: "Kubernetes" },
  { icon: "mssql.svg", name: "Microsoft SQL Server" },
  { icon: "/aws.svg", name: "AWS" },
  { icon: "/azure.svg", name: "Azure" },
  { icon: "/cicd.svg", name: "CI/CD" },
];

export const experiences: IExperience[] = [
  {
    imageSrc: '/mct-net.png',
    dateFrom: 'Jun. 2026',
    dateTill: 'now',
    title: 'Freelancing: Developer & AI-Ambassador',
    description: 'Bringing principles of traditional Software development to an agency with a focus on AI development.',
    classAttribute: 'w-3/4',
    margin: 0
  },
  {
    imageSrc: '/wayventure.png',
    dateFrom: 'Apr. 2026',
    dateTill: 'now',
    title: 'Entrepreneurship',
    description: 'Developing & running \'WayVenture\' - Your smart travel companion',
    classAttribute: 'w-20 rounded-xl',
    margin: -50
  },
  {
    imageSrc: '/jagdtausch.png',
    dateFrom: 'Jul. 2024',
    dateTill: 'Sept. 2025',
    title: 'Freelancing: Customer project',
    description: 'Developing the MVP for \'JagdTausch\', a marketplace for used and new hunting equipment',
    classAttribute: 'w-7/8',
    margin: -20
  },
  {
    imageSrc: '/es-logo.svg',
    dateFrom: 'Oct. 2024',
    dateTill: 'now',
    title: 'Full Stack Developer',
    description: 'Developing microservices with C# .NET and Angular to replace methods of a legacy system.',
    classAttribute: 'w-12',
    margin: -25
  },
  {
    imageSrc: '/portal-logo-dark.62488549.png',
    dateFrom: 'Dec. 2021',
    dateTill: 'Sep. 2024',
    title: 'Working Student - Full Stack Developer',
    description: 'Building a reporting Tool for theatres and event clients to make Reporting more easy for them. Working with PHP, TypeScript, MongoDB, Terraform, Mercure',
    classAttribute: 'w-28',
    margin: -10
  },
  {
    imageSrc: '/abstractvoid_big_void.png',
    dateFrom: 'Mar. 2020',
    dateTill: 'Dec. 2024',
    title: 'Entrepreneurship',
    description: 'Building an innovative inhouse navigation system for large building complex using Bluetooth Low Energy. Working with Laravel, Alpine JS, Tailwind css (TALL-Stack) and NodeJS (erxpressJS) for webservices. ',
    classAttribute: 'w-24',
    margin: -20
  },
  {
    imageSrc: '/ecoplan.png',
    dateFrom: 'Sep. 2017',
    dateTill: 'Sep. 2021',
    title: 'Working Student / Bachelorand',
    description: 'Building and customizing a crm system for multiple clients. Integrating swiss QR-Code for bills. Working with Tomcat EE and Java for webservices using Java EE',
    classAttribute: 'w-3/4',
    margin: 5
  },
];

export const contactBoxes: IContactBox[] = [
  { title: '', text: '', icon: '' },
  { title: 'Reach out', text: 'Feel free to reach out', icon: 'bx-envelope' },
  { title: '', text: '', icon: '' },
]

export const skills: ISkill[] = [
  {
    name: 'Frontend Development (JS, TS, Frameworks)',
    percentage: 100,
    intro: 'Creating dynamic and responsive user interfaces with modern web technologies.',
    description: 'Frontend development is an integral part of my expertise. I am proficient in JavaScript, TypeScript, and modern frameworks such as Next.js, React, Vue.js, and Angular, which I utilize to create dynamic and responsive user interfaces.'
  },
  {
    name: 'Backend Development',
    percentage: 100,
    intro: 'Building robust and scalable server-side systems using C#, Java, and PHP.',
    description: 'I have extensive experience in backend development, including working with PHP, Java, and C#. This area remains a core part of my professional skill set, and I have consistently applied these technologies in building robust and scalable systems.'
  },
  {
    name: 'Clean Code',
    percentage: 100,
    intro: 'Writing maintainable, well-structured code for long-term project success.',
    description: 'Clean code is at the heart of every successful development process. I prioritize writing maintainable, well-structured code that is easily adaptable to changes, ensuring long-term project scalability and team collaboration.'
  },
  {
    name: 'Agile Software Development',
    percentage: 100,
    intro: 'Delivering high-quality solutions through adaptive and collaborative methodologies.',
    description: 'I firmly believe in the principles of Agile software development. My experience with Agile methodologies, particularly at Reservix, has proven to be an essential approach for creating adaptive and high-quality software solutions.'
  },
  {
    name: 'CI/CD',
    percentage: 100,
    intro: 'Automating deployment workflows for streamlined and reliable delivery.',
    description: 'Continuous Integration and Continuous Deployment (CI/CD) are fundamental to modern software practices. I have developed expertise in tools like GitHub Actions, GitLab Pipelines, and TeamCity, which enable me to automate deployment workflows and ensure streamlined delivery of code across environments.'
  },
  {
    name: 'Cloud',
    percentage: 100,
    intro: 'Optimizing performance and scalability through cloud infrastructure management.',
    description: 'Cloud computing is an essential part of my technical repertoire. I have experience deploying and managing applications on cloud infrastructure, using Docker Compose to host apps on cloud servers, and continuously adapting to emerging cloud technologies to optimize application performance and scalability.'
  },
  {
    name: 'Kubernetes',
    percentage: 100,
    intro: 'Orchestrating containerized applications for scalable microservices management.',
    description: 'Kubernetes is a powerful tool for managing containerized applications. I gained substantial experience with Kubernetes while working on my master’s thesis, where I utilized it to manage microservices and automate deployment processes in a scalable manner.'
  },
  {
    name: 'Java and Kotlin (Android)',
    percentage: 100,
    intro: 'Developing mobile and enterprise applications with a strong foundational background.',
    description: 'My development journey began with Java, which laid a strong foundation for my skills. I further honed these skills working with Java EE for Webservice development during my time at ECOPLAN GmbH.'
  }
]

export const voluntaryWorks: IVoluntaryWork[] = [
  {
    imageSrc: 'https://img.icons8.com/ios-filled/100/primary/fire-station.png',
    dateFrom: '2018',
    dateTill: '2024',
    title: 'Fire Department Fulda-Mitte',
    description: 'Active member of the local fire department, ensuring safety and responding to emergencies.',
    backTitle: 'My Role & Activities',
    backDescription: 'The operational unit is the core of our Volunteer Fire Department. Its members respond to fires, technical rescue operations, severe weather incidents, and other emergencies to protect lives, property, and the environment.\n' +
      '\n' +
      'In addition to emergency responses, our activities include regular training sessions and drills. These ensure the safe handling of modern equipment and the continuous improvement of operational procedures. Teamwork, readiness, and a strong sense of responsibility are central to our commitment to serving the community.',
    backImages: []
  },
  {
    imageSrc: 'https://le-cdn.website-editor.net/s/efd7e5d4de204150b1303cccb1527684/dms3rep/multi/opt/FW+LOGO+HOFB+MITTE+bunt+frei-1920w.png?Expires=1769085645&Signature=ABkjNsIoHTog39Iuis267AmRtzb4UKEjYW3pgAj0SJes-SO2XPI4ddBlXdMOi~djgtM2JUsE1qRXdLNiWtKKgzldVGYPs4fd1AW8-SRZ34N1QRNAqpmAda4ZlxX4nRcx0unWqvWW14DIvYu0H7oVkDRy70NDeGwyDYxV64-y~JbF-7yD9ue3GNcGDmZa9vzoLLhIspkw0UCXMCLio8U82qeQ-AzhreJ72rjMVfeCDvQg2I42GUNG-iLIySeSLhUGVrW-JaanG2-qp~11RDvF1xL2Fyih5cDt1CpgHLy1ThNWwsiLkLqUPAV9cCN4svl0tH1RE9~IVK0mRfRIRjJvVQ__&Key-Pair-Id=K2NXBXLF010TJW',
    dateFrom: '2024',
    dateTill: 'now',
    title: 'Fire Department Hofbieber-Mitte',
    description: 'Active member of the local fire department, ensuring safety and responding to emergencies.',
    backTitle: 'My Role & Activities',
    backDescription: 'The operational unit is the core of our Volunteer Fire Department. Its members respond to fires, technical rescue operations, severe weather incidents, and other emergencies to protect lives, property, and the environment.\n' +
      '\n' +
      'In addition to emergency responses, our activities include regular training sessions and drills. These ensure the safe handling of modern equipment and the continuous improvement of operational procedures. Teamwork, readiness, and a strong sense of responsibility are central to our commitment to serving the community.',
    backImages: [ "https://le-cdn.website-editor.net/s/efd7e5d4de204150b1303cccb1527684/dms3rep/multi/opt/IMG_7335-1920w.JPG?Expires=1768989704&Signature=iETmWl2O3eX~~5jZfuj8XbkIhENAgGNYNDMK-V6HBchu4~UUR6Gcs5sKKq5sELPMz3FrE3yLhnnan4UCaah-31jE8Hu4JBlZNOOy5ot6ri9E08oAu37eHamsbYGEkt2gil22DAuOvySFNW5mfy1xxq1ynSL0AejKN5gfzVEu5edCEmM-zw7LuQ6Q~GXMFoj88gROteAqNWjIguoLmXGjpVfUul6ZNqES21D7tA5sGtllXpdy2y2M3b95OxaLas-94SXzTV9DAvu-mYFdbQjrQ7sUIYGrAY8LjgdTH6Snmc3F~WFM3eLpUDvkzK1Tq3iwVmbs~5XAp1506gU7maTHNA__&Key-Pair-Id=K2NXBXLF010TJW" ]
  }
]

export const portfolioItems: IPortfolioItem[] = [
  {
    id: 'thesis',
    title: "Master's Thesis",
    image: '/img_1.png',
    link: '/Masterthesis.pdf',
    isExternal: true,
    intro: "My master's thesis for the degree Master of Applied Computer Science focused on analyzing Kubernetes security architectures and evaluating the effectiveness of Zero Trust principles in mitigating vulnerabilities...",
    description: `
      <div class="mt-4 text-grey">
        <strong class="text-black">Abstract</strong><br />
        Software development is constantly changing, from bare-metal servers to containers and
        container orchestration platforms such as Kubernetes. Despite the introduction of numerous
        best practices for securing Kubernetes, the question remains whether these traditional
        security approaches are sufficient to protect the dynamic and distributed nature of modern
        Kubernetes environments. In this context, the zero trust concept “Never Trust, Always
        Verify” is becoming increasingly important.
        This thesis analyzes the security architecture of Kubernetes clusters to evaluate the effec
        tiveness of the Zero Trust architecture in identifying and remediating vulnerabilities and
        mitigating threats to the cluster. Security best practices and components of the zero-trust
        architecture will be presented and implemented in the Minikube and EKS environments
        using a sample application.
        The effectiveness analysis includes a detailed measurement of resource consumption (CPU
        and memory), threat prevention based on threat techniques, attack vectors and current
        vulnerabilities for Kubernetes clusters, additional vulnerabilities, attack vectors and chal
        lenges, and addresses the complexity and effort of integrating a zero trust architecture.
        This paper analyzes the security architecture of Kubernetes clusters in order to demonstrate
        the effectiveness of the monitoring, which can be carried out by Grafana, Prometheus and
        Kiali, is just as essential. The Zero Trust architecture increases resource consumption; in
        the public cloud cluster in particular, this additional resource consumption can lead to
        costs that are twice as high compared to a standard setup without Zero Trust. Furthermore,
        the evaluation of threat prevention shows that security best practices alone can provide
        comprehensive protection against the threats examined. In addition, the challenges and
        disadvantages of the zero-trust architecture, such as the increased complexity and the
        time required for implementation, are discussed. While zero-trust architecture can improve
        protection against internal threats, it has limited impact on external threats and leads to
        increased administrative overhead and data volume.
        For organizations seeking cost-effective solutions and needing to consider the additional
        administrative burden of zero trust practices, a careful combination of best practices and
        targeted zero trust measures could provide a balanced solution that considers security and
        efficiency
      </div>
    `
  },
  {
    id: 'jagdtausch',
    title: 'JagdTausch',
    image: '/JagdTausch-Projekt.png',
    link: 'https://jagdtausch.de/',
    isExternal: true,
    intro: "JagdTausch is a specialized, mobile-first marketplace platform designed specifically for the hunting community to buy and sell used hunting equipment.",
    description: `
      <div class="text-grey">
        <p class="mb-4">
          <strong class="text-black">JagdTausch</strong> is a specialized, mobile-first marketplace platform designed specifically for the hunting community to buy and sell used hunting equipment. Built as a high-performance <strong class="text-black">Progressive Web App (PWA)</strong>, it provides a seamless, app-like experience directly in the browser without requiring a download.
        </p>

        <h4 class="font-bold text-lg mb-2 text-black">Key Features:</h4>
        <ul class="list-disc ml-5 mb-4">
          <li><strong class="text-black">Specialized Classifieds:</strong> A dedicated ecosystem for hunting gear, featuring category-based organization and advanced filtering (location, price, etc.).</li>
          <li><strong class="text-black">User Engagement:</strong> Includes a real-time integrated chat system for secure communication between buyers and sellers, a favorites watchlist, and a multi-image upload system for listings.</li>
          <li><strong class="text-black">Mobile-First PWA:</strong> Optimized for mobile use with offline functionality, fast loading via intelligent caching, and local storage for messages and favorites.</li>
          <li><strong class="text-black">Secure Ecosystem:</strong> Features a robust authentication system (Email, Google, Facebook) and a dedicated Admin Dashboard for listing moderation and user management.</li>
        </ul>

        <h4 class="font-bold text-lg mb-2 text-black">Technical Stack:</h4>
        <ul class="list-disc ml-5 mb-4">
          <li><strong class="text-black">Frontend:</strong> Next.js, TypeScript.</li>
          <li><strong class="text-black">Backend:</strong> Symfony, PHP.</li>
          <li><strong class="text-black">Styling:</strong> Tailwind CSS for a modern, responsive, and performant UI.</li>
          <li><strong class="text-black">Capabilities:</strong> PWA integration, Web Push Notifications, and Mercure for real-time updates.</li>
          <li><strong class="text-black">Infrastructure:</strong> Dockerized deployment with CI/CD pipelines via GitHub Actions and GHCR.</li>
        </ul>

        <p>
          This project demonstrates expertise in building complex, niche-specific e-commerce solutions with a focus on performance, user experience, and modern web standards.
        </p>
      </div>
    `
  },
  /*{
    id: 'travel',
    title: 'Travel Planning Software',
    image: '/in-progress.svg',
    link: '/',
    intro: "A cool new project with C# .NET and Angular is currently being developed here. It will be a travel planning software.",
    description: `
      <div class="text-grey">
        <p>A cool new project with C# .NET and Angular is currently being developed here. It will be a travel planning software.</p>
      </div>
    `
  },
  {
    id: 'progress',
    title: 'New Project',
    image: '/in-progress.svg',
    link: '/',
    intro: "A cool new project is currently being developed here.",
    description: `
      <div class="text-grey">
        <p>A cool new project is currently being developed here.</p>
      </div>
    `
  },
  {
    id: 'socialinsiders',
    title: 'Socialinsiders',
    image: '/socialinsiders.png',
    link: 'https://socialinsider.io/',
    isExternal: true,
    intro: "Socialinsiders is a social media analytics and benchmarking tool. I contributed to the development of several features, ensuring high performance and data accuracy for marketing teams worldwide.",
    description: `
      <div class="text-grey">
        <p>
          <strong class="text-black">Socialinsiders</strong> is a social media analytics and benchmarking tool. 
          I contributed to the development of several features, ensuring high performance and data accuracy for marketing teams worldwide.
        </p>
      </div>
    `
  }*/
]

export const aiConsultingTracks: IAiConsultingTrack[] = [
  {
    audience: 'For Businesses',
    icon: 'bx-buildings',
    title: 'AI Strategy & Agent-Driven Development Migration',
    description: 'A structured path from traditional development to AI-agent-driven workflows, based on what actually creates leverage in your organisation, not on hype.',
    features: [
      'Assessment of your current development processes and where AI agents create real leverage',
      'A migration roadmap from traditional development to AI-agent-driven workflows',
      'Tooling & governance: agent frameworks, CI/CD integration, review and security guardrails for AI-generated code',
      'A pilot project or proof of concept before any full rollout',
      'Team enablement, so your organisation does not depend on a single AI-fluent person',
    ],
  },
  {
    audience: 'For Developers',
    icon: 'bx-code-alt',
    title: 'Working With AI Agents: Coaching for Developers',
    description: 'Developer-to-developer coaching on getting real work done with AI agents while keeping the code quality and ownership you would expect from your own hands.',
    features: [
      '1:1 or team coaching on agentic workflows: prompting, task decomposition, review habits',
      'Setting up and customizing agent tooling such as Claude Code, MCP servers and custom agents',
      'Reviewing AI-written code without losing code quality and ownership',
      'Workshops or ongoing mentoring, tailored to your team and your stack',
    ],
  },
];

export const wayVentureFeatures: IWayVentureFeature[] = [
  {
    icon: 'bx-shield-quarter',
    title: 'Digital Travel Pass',
    description: 'Every country you visit gets stamped into a digital passport, so your travel history becomes something you can actually look back on.',
    badge: 'USP',
  },
  {
    icon: 'bx-wallet',
    title: 'Trip Budget Planner',
    description: 'Track spending per trip and per waypoint, so you always know what a spontaneous detour is going to cost before you take it.',
  },
  {
    icon: 'bx-map-alt',
    title: 'Waypoints & Travel Notices',
    description: 'Add waypoints on the fly, get country-specific travel advisories, and share a route via link with fellow travelers.',
  },
  {
    icon: 'bx-bot',
    title: 'AI Trip Timeline',
    description: 'An AI-generated summary turns raw waypoints and dates into a readable story of the trip, automatically.',
    badge: 'AI',
  },
  {
    icon: 'bx-group',
    title: 'Sharing & Invites',
    description: 'Share a trip with shared-link or invite-link access, so friends and family can follow along without an account.',
  },
  {
    icon: 'bx-car',
    title: 'Vehicle Management',
    description: 'Keep vehicles, from the daily car to the camper van, attached to the trips they belong to.',
  },
];

export const wayVentureUpcoming: IWayVentureUpcoming[] = [
  { icon: 'bx-heart', title: 'Community Features' },
  { icon: 'bx-layout', title: 'Creator Mode' },
  { icon: 'bx-list-check', title: 'Equipment Checklists' },
  { icon: 'bx-buildings', title: 'Camp Spots' },
  { icon: 'bx-brain', title: 'AI Travel Agent' },
  { icon: 'bx-book-content', title: 'Trip Photobook' },
];

export const wayVentureFaq: IWayVentureFaq[] = [
  {
    question: 'What is WayVenture?',
    answer: 'WayVenture is a mobile-first travel companion app for planning and living through road trips and spontaneous getaways. It combines a digital travel pass, trip budgeting, AI-generated trip timelines, waypoint-based travel advisories, and vehicle management in a single all-in-one travel app.',
  },
  {
    question: 'Who built WayVenture?',
    answer: 'WayVenture is an independent product designed and built by Christian Dechant, a full-stack developer, as a self-initiated venture alongside his freelance work.',
  },
  {
    question: 'What makes WayVenture different from other travel planners?',
    answer: 'WayVenture supports both planned trips and spontaneous trips as first-class citizens. A spontaneous trip can be created in a single step with everything else, name, start date, budget, filled in automatically, while planned trips get a full itinerary with waypoints and country-aware travel advisories.',
  },
  {
    question: 'Is WayVenture free to use?',
    answer: 'WayVenture offers a free tier alongside paid Weltenbummler and Globetrotter tiers that unlock features like per-waypoint travel advice and higher usage limits.',
  },
  {
    question: 'What is coming next for WayVenture?',
    answer: 'The roadmap includes community features, a creator mode, equipment checklists, camp spot discovery, an AI travel agent, a trip photobook, and a "Document Safe" for securely storing travel and vehicle documents with OCR and expiry reminders.',
  },
  {
    question: 'Where can I try WayVenture?',
    answer: 'WayVenture is live at wayventure.de in both German and English, with no credit card required to start.',
  },
];