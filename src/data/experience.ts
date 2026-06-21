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
      'Working on real time monitoring and evaluations for AI agents, distributed systems and event driven architectures.',
    startDate: 'Aug 2025',
    endDate: 'Current',
    companyColor: 'var(--pixel-yellow)',
    technologies: [],
  },
  {
    company: 'Commonwealth Bank of Australia',
    role: 'Technology Graduate - Engineering',
    description:
      '3 rotations in a grad program, worked on all kinds of projects for wildly different use cases.',
    startDate: 'Feb 2024',
    endDate: 'Aug 2025',
    companyColor: 'var(--pixel-yellow)',
    technologies: [],
  },
  {
    company: 'Coles',
    role: 'Online Pick Packer',
    description: 'Walked around the store procuring items for online orders',
    startDate: 'Feb 2021',
    endDate: 'Mar 2022',
    companyColor: 'var(--pixel-red)',
    technologies: [],
  },
  {
    company: 'Private Tutoring',
    role: 'Tutor',
    description: 'Earning some money while studying',
    startDate: 'Feb 2020',
    endDate: 'Feb 2021',
    companyColor: 'var(--pixel-blue)',
    technologies: [],
  },
]

export default PAST_ROLES
