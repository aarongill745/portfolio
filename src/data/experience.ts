const PAST_ROLES: {
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
  companyColor: string
  technologies?: string[]
}[] = [
  {
    company: 'Commonwealth Bank of Australia',
    role: 'Software Engineer - Companion',
    description:
      'Working on real time monitoring and evaluations of AI agents.',
    startDate: 'Aug 2025',
    endDate: 'Current',
    companyColor: 'var(--pixel-yellow)',
    technologies: [],
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
  },
  {
    company: 'Coles',
    role: 'Online Pick Packer',
    description: 'Walked around the store procuring items for online orders.',
    startDate: 'Feb 2021',
    endDate: 'Mar 2022',
    companyColor: 'var(--pixel-red)',
    technologies: [],
  },
  {
    company: 'Private Tutoring',
    role: 'Tutor',
    description:
      'Tutored English and General Ability to primary school students.',
    startDate: 'Feb 2020',
    endDate: 'Feb 2021',
    companyColor: 'var(--pixel-blue)',
    technologies: [],
  },
]

export default PAST_ROLES
