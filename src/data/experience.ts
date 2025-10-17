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
    role: 'Software Engineer - AI Acceleration',
    description:
      'Working on real time monitoring and analytics of AI agents.',
    startDate: 'Aug 2025',
    endDate: 'Current',
    companyColor: 'var(--pixel-yellow)',
    technologies: ['NextJS', 'TypeScript', 'Python', 'AWS', 'Kafka'],
    detailedResponsibilities: [
      'Developing real-time monitoring dashboards for AI agent performance tracking',
      'Building analytics pipelines to process and visualize agent interaction data',
      'Collaborating with ML teams to integrate monitoring into AI workflows',
      'Implementing automated alerting systems for agent anomaly detection'
    ]
  },
  {
    company: 'Commonwealth Bank of Australia',
    role: 'Technology Graduate - Engineering',
    description:
      '3 x 6 month software engineering rotations as part of a graduate program. I rotated through these teams:\n- Retail Technology (Credit Cards)\n- Engineering Platforms (SDLC Hub)\n- Business Banking (AI Acceleration)',
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
      'Walked around the store collecting items for online orders.',
    startDate: 'Feb 2021',
    endDate: 'Mar 2022',
    companyColor: 'var(--pixel-red)',
    technologies: [],
    detailedResponsibilities: [
      'Efficiently picked and packed grocery items for online customer orders',
      'Maintained high accuracy rates for order fulfillment',
      'Worked in a fast-paced retail environment meeting daily targets'
    ]
  },
  {
    company: 'Private Tutoring',
    role: 'Tutor',
    description: 'Tutored math for high school students',
    startDate: 'Feb 2020',
    endDate: 'Feb 2021',
    companyColor: 'var(--pixel-blue)',
    technologies: [],
    detailedResponsibilities: [
      'Provided one-on-one mathematics tutoring for high school students',
      'Developed customized lesson plans based on individual student needs',
      'Helped students improve their grades and understanding of mathematical concepts'
    ]
  }
]

export default PAST_ROLES
