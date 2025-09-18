'use client'

import { ReactNode } from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

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
    <Timeline position="alternate">
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                bgcolor: '#1976d2',
                width: 12,
                height: 12
              }}
            />
            {index < items.length - 1 && (
              <TimelineConnector sx={{ bgcolor: '#1976d2' }} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <div style={{
              backgroundColor: 'white',
              padding: '16px',
              marginBottom: '16px',
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div>
                  <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1a1a1a'
                  }}>
                    {item.title}
                  </h3>
                  <h4 style={{
                    margin: '0',
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: '#1976d2'
                  }}>
                    {item.subtitle}
                  </h4>
                </div>
                <span style={{
                  backgroundColor: '#1976d2',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {item.period}
                </span>
              </div>
              <div style={{
                fontSize: '0.875rem',
                lineHeight: '1.5',
                color: '#666'
              }}>
                {typeof item.description === 'string' ? (
                  <p style={{ margin: 0 }}>{item.description}</p>
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