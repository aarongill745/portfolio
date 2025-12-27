const PAST_ROLES: {
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
  companyColor: string
  technologies?: string[]
  detailedResponsibilities?: string[]
}[] = [
  {
    company: 'Commonwealth Bank of Australia',
    role: 'Software Engineer - Virtual Relationship Manager',
    description:
      'Working on real time monitoring and analytics of AI agents.',
    startDate: 'Aug 2025',
    endDate: 'Current',
    companyColor: 'var(--pixel-yellow)',
    technologies: ['NextJS', 'TypeScript', 'Python', 'AWS', 'Kafka'],
    detailedResponsibilities: [
      'Developing real-time monitoring for AI agent performance tracking',
      'Building analytics pipelines to process and visualize agent interaction data',
      'Implementing automated alerting systems for agent anomaly detection'
    ]
  },
  {
    company: 'Commonwealth Bank of Australia',
    role: 'Technology Graduate - Engineering',
    description:
      '3 x 6 month full stack software engineering rotations as part of a graduate program, working in both customer facing applications and internal tooling endeavours.',
    startDate: 'Feb 2024',
    endDate: 'Aug 2025',
    companyColor: 'var(--pixel-yellow)',
    technologies: ['React', 'TypeScript', 'Python', 'NodeJS', 'Azure', 'AWS'],
    detailedResponsibilities: [
      'Rotation 1 (Retail Technology): Contributed to credit card platform modernization using React and Java microservices',
      'Rotation 2 (Engineering Platforms): Built internal developer tools and CI/CD pipeline improvements for the SDLC Hub',
      'Rotation 3 (Business Banking): Joined AI Acceleration team to develop monitoring and analytics solutions',
      'Participated in agile ceremonies and collaborated across multiple engineering teams',
      'Gained exposure to enterprise-scale software development practices and cloud infrastructure'
    ]
  },
  {
    company: 'Coles',
    role: 'Online Pick Packer',
    description:
      'Walked around the store procuring items for online orders.',
    startDate: 'Feb 2021',
    endDate: 'Mar 2022',
    companyColor: 'var(--pixel-red)',
    technologies: [],
    detailedResponsibilities: [
      'Made sure online grocery orders were being fulfilled during COVID lockdowns.'
    ]
  },
  {
    company: 'Private Tutoring',
    role: 'Tutor',
    description: 'Tutored English and General Ability to primary school students.',
    startDate: 'Feb 2020',
    endDate: 'Feb 2021',
    companyColor: 'var(--pixel-blue)',
    technologies: [],
    detailedResponsibilities: [
      'Tutored groups of primary school students in preparation for the OC test.',
    ]
  }
]

export default PAST_ROLES
