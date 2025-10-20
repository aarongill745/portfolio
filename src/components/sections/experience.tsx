import PAST_ROLES from '@/data/experience'
import { Timeline } from '@/components/ui/timeline'

export default function Experience() {
  const timelineItems = PAST_ROLES.map(role => ({
    title: role.role,
    subtitle: role.company,
    period: `${role.endDate} - ${role.startDate}`,
    description: role.description,
    companyColor: role.companyColor,
    technologies: role.technologies,
    detailedResponsibilities: role.detailedResponsibilities
  }))

  return (
    <div className="mb-2">
      <h2 className="mb-8 text-2xl sm:text-3xl font-bold tracking-tighter">Experience<span className='ml-4 text-xs tracking-tighter'>You can see my resume if you scroll up a bit*</span></h2>
      <Timeline items={timelineItems} />
    </div>
  )
}
