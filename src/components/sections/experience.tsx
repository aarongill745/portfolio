import PAST_ROLES from '@/data/experience'
import GameRoadmap1, { Quest } from '@/components/ui/8bit/blocks/game-roadmap1'

export default function Experience() {
  const quests: Quest[] = PAST_ROLES.map(role => ({
    title: `${role.role} @ ${role.company}`,
    description: `${role.description} (${role.startDate} – ${role.endDate})`,
    status: role.endDate === 'Current' ? 'in-progress' : 'completed',
  }))

  return (
    <div className="mb-2">
      <h2 className="mb-8 text-2xl sm:text-3xl font-bold tracking-tighter">
        Experience
        <span className="ml-4 text-xs tracking-tighter">You can see my resume if you scroll up a bit*</span>
      </h2>
      <GameRoadmap1 title="" description="" quests={quests} className="px-0 py-0" />
    </div>
  )
}
