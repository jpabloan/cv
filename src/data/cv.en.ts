// English translation of the user-verified Spanish CV content.
export const cv = {
  name: 'Juan Pablo Arceo Noriega',
  role: 'Backend Developer',
  location: 'Mexico, Mexico',
  github: 'https://github.com/jpabloan',
  ui: {
    skipToContent: 'Skip to content',
    navigationLabel: 'Résumé sections',
    sections: {
      profile: 'Profile',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      languages: 'Languages',
    },
    headings: {
      profile: 'Professional Profile',
      experience: 'Experience',
      skills: 'Technical Skills',
      education: 'Education',
      languages: 'Languages',
    },
    technologies: 'Technologies used at Enviatodo',
    languageSwitcherLabel: 'Language',
    backToTop: 'Back to top',
    themeToggleLabel: 'Change theme',
  },
  profile: [
    'Backend Developer with 5 years of professional experience, specializing in PHP, CodeIgniter, MySQL, and REST API integration. Experienced in developing integrations with external services, business logic, and administrative tools, as well as providing technical support for operations and diagnosing incidents through production logs.',
    'Currently focused on expanding my knowledge of software architecture and AI-assisted development.',
  ],
  experience: {
    company: 'Enviatodo',
    role: 'Backend Developer / Technical Support',
    start: '2021',
    end: '2026',
    contributions: [
      [
        'REST Integrations',
        'Developed REST integrations with logistics providers such as iMile, Sendex, AMPM, BigSmart, and Quality Post, implementing coverage, quoting, shipping label generation, pickup, and tracking workflows according to each provider’s capabilities.',
      ],
      [
        'Integration Maintenance',
        'Maintained and updated existing integrations with providers such as FedEx, DHL, Estafeta, Paquetexpress, and Redpack, adding new functionality, including pickup processes.',
      ],
      [
        'Business Rules',
        'Developed business rules for logistics services, including coverage restrictions by state and customer, pickup availability, and temporary suspension of quoting or shipping label generation.',
      ],
      [
        'Administrative Tools',
        'Built internal administrative tools across both interface and backend to perform balance adjustments —charges and credits— resulting from shipping label incidents and compensation claims, as well as functionality for managing roles and internal users.',
      ],
      [
        'Operations Support',
        'Provided technical support to Operations by reviewing and monitoring production logs to verify reported incidents, reproducing errors in the local environment, and escalating cases with technical information for resolution.',
      ],
      [
        'Queries and Reports',
        'Performed ad hoc SQL queries in MySQL to address operational and administrative needs, including shipping label reports by provider, period, and status.',
      ],
    ],
    technologies: 'PHP · CodeIgniter 3 · MySQL · REST APIs · Git · Postman · Linux/SSH',
  },
  skills: [
    ['Backend', 'PHP · CodeIgniter 3 · REST APIs · External service integrations'],
    ['Data', 'MySQL · SQL'],
    ['Development and Operations', 'Git · Linux · SSH · Postman · log analysis'],
  ],
  education:
    'Self-taught in software development, with ongoing learning through technical documentation, professional practice, and personal projects.',
  languages: [
    ['Spanish', 'Native'],
    ['English', 'Professional'],
  ],
  developedBy: 'Developed by: jpabloan',
};
