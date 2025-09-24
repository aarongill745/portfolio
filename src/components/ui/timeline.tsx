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
    companyColor?: string
  }>
}

function getCompanyBackgroundColor(companyColor?: string): string {
  if (!companyColor) return 'var(--background)'
  // Converts "var(--pixel-yellow)" to "var(--pixel-yellow-bg)"
  return companyColor.replace(')', '-bg)')
}

// Mobile timeline component - simple and clean
function MobileTimeline({ items }: TimelineProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: item.companyColor || 'var(--pixel-blue)' }}
            />
            <span className="text-sm text-muted-foreground font-pixel">
              {item.period}
            </span>
          </div>
          <div
            className="pixel-border p-4 transition-all duration-200 ease-in-out active:scale-[0.98] group"
            style={{ backgroundColor: 'var(--background)' }}
            onTouchStart={(e) => {
              e.currentTarget.style.backgroundColor = getCompanyBackgroundColor(item.companyColor) || 'var(--background)'
            }}
            onTouchEnd={(e) => {
              const target = e.currentTarget
              setTimeout(() => {
                if (target && target.style) {
                  target.style.backgroundColor = 'var(--background)'
                }
              }, 1000000)
            }}
          >
            <div>
              <h4 className="text-sm text-pixel-blue mb-1 font-pixel">
                {item.subtitle}
              </h4>
              <h3 className="text-base font-semibold text-foreground mb-2 group-active:text-pixel-blue transition-colors duration-200 font-pixel">
                {item.title}
              </h3>
            </div>
            <div className="text-sm leading-relaxed text-muted-foreground group-active:text-foreground transition-colors duration-200">
              {typeof item.description === 'string' ? (
                <p className="m-0 whitespace-pre-line">{item.description}</p>
              ) : (
                item.description
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Desktop timeline component - using Material-UI timeline component
function DesktopTimeline({ items }: TimelineProps) {
  return (
    <Timeline
      sx={{
        // Reduce the size of the left hand side of the timeline to position it towards the left
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
              style={{ backgroundColor: 'var(--background)' }}
              onMouseEnter={(e) => {
                // On hover, update the background colour to the company colour (yellow for CBA, red for COLES, etc)
                e.currentTarget.style.backgroundColor = getCompanyBackgroundColor(item.companyColor) || 'var(--background)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--background)'
              }}
            >
              <div>
                <h4 className="text-base text-pixel-blue mb-0">
                  {item.subtitle}
                </h4>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-pixel-blue transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
              <div className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-200">
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

// Main timeline component with conditional rendering for responsiveness
export function CustomTimeline({ items }: TimelineProps) {
  return (
    <>
      {/* Mobile timeline - visible only on small screens */}
      <div className="block md:hidden">
        <MobileTimeline items={items} />
      </div>

      {/* Desktop timeline - visible only on medium screens and up */}
      <div className="hidden md:block">
        <DesktopTimeline items={items} />
      </div>
    </>
  )
}

export { CustomTimeline as Timeline }