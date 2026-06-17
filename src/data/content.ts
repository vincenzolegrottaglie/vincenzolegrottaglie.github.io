// Single source of truth for both languages.
// Edit text here — it/en pages are generated from this data.

export type Lang = 'it' | 'en';

export const languages: Lang[] = ['it', 'en'];

/** Skill tags — language-independent, only the aria suffix is localized. */
export const skills: { name: string; url: string }[] = [
  { name: 'Python', url: 'https://www.python.org' },
  { name: 'PHP', url: 'https://www.php.net' },
  { name: 'Laravel', url: 'https://laravel.com' },
  { name: 'RAG', url: 'https://en.wikipedia.org/wiki/Retrieval-augmented_generation' },
  { name: 'Cheshire Cat', url: 'https://cheshirecat.ai' },
  { name: 'OpenAI API', url: 'https://platform.openai.com' },
  { name: 'Azure', url: 'https://azure.microsoft.com' },
  { name: 'Qdrant', url: 'https://qdrant.tech' },
  { name: 'WordPress', url: 'https://wordpress.org' },
  { name: 'Bedrock', url: 'https://roots.io/bedrock/' },
  { name: 'Sage', url: 'https://roots.io/sage/' },
  { name: 'Blade', url: 'https://laravel.com/docs/blade' },
  { name: 'Composer', url: 'https://getcomposer.org' },
  { name: 'Docker', url: 'https://www.docker.com' },
  { name: 'Git', url: 'https://git-scm.com' },
  { name: 'Nginx', url: 'https://nginx.org' },
  { name: 'N8N', url: 'https://n8n.io' },
  { name: 'Langfuse', url: 'https://langfuse.com' },
  { name: 'MySQL', url: 'https://www.mysql.com' },
  { name: 'MariaDB', url: 'https://mariadb.org' },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
  { name: 'Java', url: 'https://dev.java' },
];

/** Projects — icon + tech tags shared, title/description localized. */
export interface Project {
  icon: string;
  tags: string[];
  it: { title: string; desc: string };
  en: { title: string; desc: string };
}

export const projects: Project[] = [
  {
    icon: '🤖',
    tags: ['Python', 'Cheshire Cat', 'Qdrant', 'OpenAI'],
    it: {
      title: 'RAG Chatbot',
      desc: 'Applicazione AI basata su architettura RAG con Cheshire Cat. Integrazione con OpenAI, Qdrant come vector DB e monitoraggio tramite Langfuse.',
    },
    en: {
      title: 'RAG Chatbot',
      desc: 'AI application built on a RAG architecture with Cheshire Cat. Integration with OpenAI, Qdrant as vector DB and monitoring via Langfuse.',
    },
  },
  {
    icon: '🌐',
    tags: ['WordPress', 'Bedrock', 'Sage', 'Blade'],
    it: {
      title: 'Tema WordPress Custom',
      desc: 'Tema custom sviluppato con lo stack moderno Bedrock + Sage. Templating con Blade, gestione dipendenze con Composer, build asset con Bud.',
    },
    en: {
      title: 'Custom WordPress Theme',
      desc: 'Custom theme built with the modern Bedrock + Sage stack. Blade templating, Composer dependency management and Bud asset building.',
    },
  },
  {
    icon: '⚡',
    tags: ['PHP', 'Laravel', 'MySQL', 'Docker'],
    it: {
      title: 'API REST Laravel',
      desc: 'Backend API RESTful sviluppato con Laravel. Autenticazione, validazione, gestione risorse e documentazione degli endpoint.',
    },
    en: {
      title: 'Laravel REST API',
      desc: 'RESTful API backend built with Laravel. Authentication, validation, resource management and endpoint documentation.',
    },
  },
  {
    icon: '⚙️',
    tags: ['N8N', 'Docker', 'Nginx', 'API'],
    it: {
      title: 'N8N Automation Workflows',
      desc: 'Pipeline di automazione self-hosted con N8N per processi aziendali: integrazione dati, notifiche e orchestrazione servizi.',
    },
    en: {
      title: 'N8N Automation Workflows',
      desc: 'Self-hosted automation pipelines with N8N for business processes: data integration, notifications and service orchestration.',
    },
  },
  {
    icon: '💻',
    tags: ['Astro', 'Tailwind CSS', 'JavaScript'],
    it: {
      title: 'Portfolio Personale',
      desc: 'Questo sito! Astro, Tailwind CSS e JavaScript. Dark/light mode, responsive, ospitato su GitHub Pages.',
    },
    en: {
      title: 'Personal Portfolio',
      desc: 'This website! Astro, Tailwind CSS and JavaScript. Dark/light mode, responsive, hosted on GitHub Pages.',
    },
  },
  {
    icon: '📊',
    tags: ['Langfuse', 'Docker', 'Azure', 'Python'],
    it: {
      title: 'Monitoring Stack',
      desc: 'Setup di Langfuse self-hosted per il monitoraggio delle applicazioni AI: tracciamento delle chiamate LLM, costi e performance.',
    },
    en: {
      title: 'Monitoring Stack',
      desc: 'Self-hosted Langfuse setup for AI application monitoring: LLM call tracing, cost tracking and performance analysis.',
    },
  },
];

/** Contact links — constant URLs, localized aria labels. */
export const contactLinks = {
  linkedin: 'https://www.linkedin.com/in/vincenzo-legrottaglie/',
  github: 'https://github.com/vincenzolegrottaglie',
};

/** Localized UI strings. */
export const t = {
  it: {
    htmlLang: 'it',
    meta: {
      title: 'Vincenzo Legrottaglie — Sviluppatore Backend & AI',
      description:
        'Sviluppatore Backend & AI con competenze full stack. PHP, Laravel, Python, architetture RAG, WordPress con Bedrock e Sage.',
      ogLocale: 'it_IT',
      ogUrl: 'https://vincenzolegrottaglie.github.io/',
    },
    skipLink: 'Vai al contenuto principale',
    logoHref: '/',
    logoAria: 'Vincenzo Legrottaglie — Torna alla home',
    nav: { about: 'Chi sono', projects: 'Progetti', contact: 'Contatti' },
    mainNavAria: 'Navigazione principale',
    mobileNavAria: 'Navigazione mobile',
    mobileMenuAria: 'Menu di navigazione',
    themeToggleAria: 'Cambia tema',
    themeAriaDark: 'Attiva tema chiaro',
    themeAriaLight: 'Attiva tema scuro',
    langSwitch: { href: '/en/', code: 'EN', flag: '🇬🇧', aria: 'Switch to English version' },
    newWindow: '(si apre in una nuova finestra)',
    hero: {
      eyebrow: 'Ciao, mi chiamo',
      name: 'Vincenzo Legrottaglie',
      tagline:
        'Sviluppatore Backend & AI con competenze full stack. Costruisco soluzioni lato server con PHP, Laravel, Python e architetture RAG.',
      cta: 'Contattami',
    },
    about: {
      heading: 'Chi sono',
      subtitle: 'Backend, AI e un po’ di tutto il resto.',
      paragraphs: [
        'Sono uno sviluppatore Backend con un focus crescente sullo sviluppo di applicazioni basate su Intelligenza Artificiale. La mia formazione full stack mi ha dato una solida conoscenza dell’intero ciclo di sviluppo, mentre la mia esperienza professionale si concentra sulla creazione di soluzioni lato server.',
        'Attualmente lavoro in <a href="https://www.netseven.it/" target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-600 dark:text-blue-400 hover:underline">NET7 S.r.l.<span class="sr-only"> (si apre in una nuova finestra)</span></a> a Pisa, dove sviluppo applicazioni AI basate su architetture RAG con il framework Cheshire Cat, e creo siti WordPress con stack moderni come Bedrock e Sage. Mi occupo anche di API REST con Laravel e gestione di ambienti Docker.',
        'Appassionato di problem-solving, cerco sempre di scrivere codice pulito e di adottare le best practice dello sviluppo moderno.',
      ],
    },
    projectsSection: {
      heading: 'Progetti',
      subtitle: 'Alcuni dei lavori su cui ho lavorato.',
    },
    contact: {
      heading: 'Contatti',
      subtitle: 'Hai un progetto in mente o vuoi semplicemente fare una chiacchierata? Scrivimi!',
      linkedinAria: 'LinkedIn (si apre in una nuova finestra)',
      githubAria: 'GitHub (si apre in una nuova finestra)',
    },
    footer: '© 2026 Vincenzo Legrottaglie. Tutti i diritti riservati.',
  },
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Vincenzo Legrottaglie — Backend & AI Developer',
      description:
        'Backend & AI Developer with full stack skills. PHP, Laravel, Python, RAG architectures, WordPress with Bedrock and Sage.',
      ogLocale: 'en_US',
      ogUrl: 'https://vincenzolegrottaglie.github.io/en/',
    },
    skipLink: 'Skip to main content',
    logoHref: '/en/',
    logoAria: 'Vincenzo Legrottaglie — Go to homepage',
    nav: { about: 'About', projects: 'Projects', contact: 'Contact' },
    mainNavAria: 'Main navigation',
    mobileNavAria: 'Mobile navigation',
    mobileMenuAria: 'Navigation menu',
    themeToggleAria: 'Toggle theme',
    themeAriaDark: 'Activate light theme',
    themeAriaLight: 'Activate dark theme',
    langSwitch: { href: '/', code: 'IT', flag: '🇮🇹', aria: 'Passa alla versione italiana' },
    newWindow: '(opens in a new window)',
    hero: {
      eyebrow: 'Hi, my name is',
      name: 'Vincenzo Legrottaglie',
      tagline:
        'Backend & AI Developer with full stack skills. I build server-side solutions with PHP, Laravel, Python and RAG architectures.',
      cta: 'Get in touch',
    },
    about: {
      heading: 'About me',
      subtitle: 'Backend, AI, and a bit of everything else.',
      paragraphs: [
        'I’m a Backend Developer with a growing focus on building AI-powered applications. My full stack training gave me a solid understanding of the entire development cycle, while my professional experience is centred on creating server-side solutions.',
        'I currently work at <a href="https://www.netseven.it/" target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-600 dark:text-blue-400 hover:underline">NET7 S.r.l.<span class="sr-only"> (opens in a new window)</span></a> in Pisa, where I develop AI applications based on RAG architectures using the Cheshire Cat framework, and build WordPress sites with modern stacks like Bedrock and Sage. I also work on REST APIs with Laravel and manage Docker environments.',
        'Passionate about problem-solving, I always strive to write clean code and follow modern development best practices.',
      ],
    },
    projectsSection: {
      heading: 'Projects',
      subtitle: 'Some of the things I’ve worked on.',
    },
    contact: {
      heading: 'Contact',
      subtitle: 'Have a project in mind or just want to chat? Drop me a line!',
      linkedinAria: 'LinkedIn (opens in a new window)',
      githubAria: 'GitHub (opens in a new window)',
    },
    footer: '© 2026 Vincenzo Legrottaglie. All rights reserved.',
  },
} as const;
