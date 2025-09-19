import PAST_ROLES from '@/data/experience'
import { Timeline } from '@/components/ui/timeline'

export default function Experience() {
  const timelineItems = PAST_ROLES.map(role => ({
    title: role.role,
    subtitle: role.company,
    period: `${role.endDate} - ${role.startDate}`,
    description: role.description,
    companyColor: role.companyColor
  }))

  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Experience</h2>
      <Timeline items={timelineItems} />
    </div>
  )
}
