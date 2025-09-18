'use client'

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
  }>
}

export function CustomTimeline({ items }: TimelineProps) {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent color="textSecondary">
            {item.period}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                bgcolor: 'var(--pixel-blue)',
                width: 12,
                height: 12
              }}
            />
            {index < items.length - 1 && (
              <TimelineConnector sx={{ bgcolor: 'var(--pixel-blue)' }} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <div className="pixel-border bg-background p-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <h4 className="text-base font-medium text-pixel-blue mb-3">
                  {item.subtitle}
                </h4>
              </div>
              <div className="text-sm leading-relaxed text-muted-foreground">
                {typeof item.description === 'string' ? (
                  <p className="m-0">{item.description}</p>
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