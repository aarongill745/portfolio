import { ReactNode } from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent'

interface TimelineProps {
  items: Array<{
    title: string
    subtitle: string
    period: string
    description: string | ReactNode
    companyColor?: string
  }>
}

function getCompanyBackgroundColor(companyColor?: string): string {
  if (!companyColor) return 'var(--background)'
  // Convert "var(--pixel-yellow)" to "var(--pixel-yellow-bg)"
  return companyColor.replace(')', '-bg)')
}

export function CustomTimeline({ items }: TimelineProps) {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
        // Remove the problematic ::before pseudo-element from MuiTimelineItem-root
        '& .MuiTimelineItem-root::before': {
          display: 'none',
        },
      }}
    >
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent color="text-muted-foreground">
            {item.period}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                bgcolor: item.companyColor || 'var(--pixel-blue)',
                width: 12,
                height: 12
              }}
            />
            {index < items.length - 1 && (
              <TimelineConnector sx={{ bgcolor: item.companyColor || 'var(--pixel-blue)' }} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <div
              className="pixel-border p-4 mb-4 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
              style={{ backgroundColor: getCompanyBackgroundColor(item.companyColor) }}
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-pixel-blue transition-colors duration-200">
                  {item.title}
                </h3>
                <h4 className="text-base font-medium text-pixel-blue mb-3">
                  {item.subtitle}
                </h4>
              </div>
              <div className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                {typeof item.description === 'string' ? (
                  <p className="m-0 whitespace-pre-line">{item.description}</p>
                ) : (
                  item.description
                )}
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export { CustomTimeline as Timeline }