import { ISocial, StackGroup } from "../interfaces";

export const siteUrl = 'https://christiandechant.de';

export const contactEmail = 'freelancer@christiandechant.de';

export const socials: ISocial[] = [
  { name: 'LinkedIn', icon: 'share', url: 'https://www.linkedin.com/in/christian-dechant-a64b7917b/' },
  { name: 'GitHub', icon: 'terminal', url: 'https://github.com/InTerestedOWL' },
  { name: 'XING', icon: 'hub', url: 'https://www.xing.com/profile/Christian_Dechant6/web_profiles?expandNeffi=true' },
];

/** All public profiles, used for the `sameAs` structured data. */
export const profileUrls = [
  ...socials.map((social) => social.url),
  'https://youtube.com/@interestedowl',
];

export const wayVentureUrl = 'https://wayventure.de';

export const masterThesisUrl = '/Masterthesis.pdf';

export const jagdTauschUrl = 'https://jagdtausch.de/';

/** Full tech stack, grouped. Language-independent; group labels live in the locale files. */
export const techStack: Record<StackGroup, string[]> = {
  frontend: [ 'Next.js', 'React', 'Nuxt', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Alpine.js', 'Ionic', 'PWA' ],
  backend: [ 'C# .NET', 'PHP', 'Laravel', 'Symfony', 'Node.js', 'Express', 'Python', 'Django REST', 'Java', 'Java EE', 'Kotlin' ],
  data: [ 'PostgreSQL', 'MySQL', 'MongoDB', 'Microsoft SQL Server', 'Redis', 'Mercure' ],
  cloud: [ 'Docker', 'Kubernetes', 'Istio', 'AWS', 'Azure', 'Terraform', 'Nginx', 'GitHub Actions', 'GitLab CI', 'TeamCity' ],
  quality: [ 'TDD', 'Cypress', 'Unit & Integration Tests', 'Code Review', 'Scrum', 'Kanban' ],
  ai: [ 'Claude Code', 'MCP', 'Custom Agents', 'Ollama', 'OpenAI API' ],
};

/** Short excerpt of the stack shown in the hero code card. */
export const codeCardStack = {
  frontend: [ 'Next.js', 'Nuxt', 'Angular', 'Vue' ],
  backend: [ 'C# .NET', 'Laravel', 'Symfony', 'Java' ],
  infra: [ 'Docker', 'K8s', 'PostgreSQL', 'AWS' ],
  aiPillars: [ 'MCP Protocol', 'Claude Code', 'Agent TDD' ],
};
