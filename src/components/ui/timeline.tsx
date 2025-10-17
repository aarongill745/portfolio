'use client'

import { ReactNode } from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface TimelineProps {
  items: Array<{
    title: string
    subtitle: string
    period: string
    description: string | ReactNode
    companyColor?: string
    technologies?: string[]
    detailedResponsibilities?: string[]
  }>
}

// Mobile timeline component - simple and clean
function MobileTimeline({ items }: TimelineProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-4 h-4 flex-shrink-0 border-2 border-border [html[data-aesthetic=pixel]_&]:rounded-none [html[data-aesthetic=brutal]_&]:rounded-full"
              style={{ backgroundColor: item.companyColor || '#91a3c2' }}
            />
            <span className="text-sm text-foreground opacity-60 font-pixel">
              {item.period}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div
                className="p-4 transition-all duration-150 ease-in-out active:translate-y-1 active:[box-shadow:2px_2px_0px_0px_#95bfff] dark:active:[box-shadow:2px_2px_0px_0px_#b19cd9] group border-[4px] border-border rounded-[0px] [box-shadow:6px_6px_0px_0px_#95bfff] dark:[box-shadow:6px_6px_0px_0px_#b19cd9] cursor-pointer"
                style={{ backgroundColor: 'var(--secondary-background)' }}
              >
                <div>
                  <h4 className="text-sm mb-1 font-pixel font-bold text-[#91a3c2]">
                    {item.subtitle}
                  </h4>
                  <h3 className="text-base font-semibold text-foreground mb-2 font-pixel">
                    {item.title}
                  </h3>
                </div>
                <div className="text-sm leading-relaxed text-foreground opacity-80">
                  {typeof item.description === 'string' ? (
                    <p className="m-0 whitespace-pre-line">{item.description}</p>
                  ) : (
                    item.description
                  )}
                </div>
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-bold border-2 border-border bg-[#91a3c2] text-white [box-shadow:2px_2px_0px_0px_var(--border)]"
                        style={{ borderRadius: 0 }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-2xl border-[3px] border-border data-[aesthetic=pixel]:[box-shadow:6px_6px_0px_0px_var(--border)]" style={{ borderRadius: 0 }}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {item.title}
                </DialogTitle>
                <DialogDescription className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {item.subtitle} • {item.period}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                {item.detailedResponsibilities && item.detailedResponsibilities.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Key Responsibilities</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {item.detailedResponsibilities.map((responsibility, idx) => (
                        <li key={idx} className="leading-relaxed">{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.technologies && item.technologies.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm border-2 border-border bg-background"
                          style={{ borderRadius: 0 }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
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
          <TimelineOppositeContent
            color="text-muted-foreground"
            sx={{
              color: 'var(--foreground)',
              opacity: 0.6,
              fontWeight: 'var(--font-weight-base)'
            }}
          >
            {item.period}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                bgcolor: item.companyColor || '#91a3c2',
                width: 16,
                height: 16,
                border: '3px solid var(--border)',
                boxShadow: '0 0 0 3px var(--background)',
                borderRadius: 'var(--dot-radius, 50%)'
              }}
            />
            {index < items.length - 1 && (
              <TimelineConnector
                sx={{
                  bgcolor: 'var(--timeline-connector, #91a3c2)',
                  width: 4,
                  border: '2px solid var(--border)',
                  boxShadow: '2px 0 0 0 var(--background), -2px 0 0 0 var(--background)'
                }}
              />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="p-4 mb-4 transition-all duration-150 ease-in-out hover:-translate-y-2 hover:[box-shadow:8px_8px_0px_0px_#95bfff] dark:hover:[box-shadow:8px_8px_0px_0px_#b19cd9] cursor-pointer group border-[4px] border-border rounded-[0px] [box-shadow:6px_6px_0px_0px_#95bfff] dark:[box-shadow:6px_6px_0px_0px_#b19cd9]"
                  style={{ backgroundColor: 'var(--secondary-background)' }}
                >
                  <div>
                    <h4 className="text-base mb-0 font-bold text-[#91a3c2]">
                      {item.subtitle}
                    </h4>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-base leading-relaxed text-foreground opacity-80">
                    {typeof item.description === 'string' ? (
                      <p className="m-0 whitespace-pre-line">{item.description}</p>
                    ) : (
                      item.description
                    )}
                  </div>
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-bold border-2 border-border bg-[#91a3c2] text-white [box-shadow:2px_2px_0px_0px_var(--border)]"
                          style={{ borderRadius: 0 }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl border-[3px] border-border data-[aesthetic=pixel]:[box-shadow:6px_6px_0px_0px_var(--border)]" style={{ borderRadius: 0 }}>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    {item.title}
                  </DialogTitle>
                  <DialogDescription className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    {item.subtitle} • {item.period}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {item.detailedResponsibilities && item.detailedResponsibilities.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Key Responsibilities</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {item.detailedResponsibilities.map((responsibility, idx) => (
                          <li key={idx} className="leading-relaxed">{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.technologies && item.technologies.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-sm border-2 border-border bg-background"
                            style={{ borderRadius: 0 }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
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