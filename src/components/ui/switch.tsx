'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      // Base structure
      'peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center',
      // Pixel borders
      'border-4 border-border',
      // Background colors (changes with checked state)
      'bg-background data-[state=checked]:bg-foreground',
      // Focus and disabled states
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground',
      'disabled:cursor-not-allowed disabled:opacity-50',
      // Transition
      'transition-colors',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        // Thumb size and shape
        'pointer-events-none block h-6 w-6',
        // Border
        'border-4 border-border',
        // Background
        'bg-foreground data-[state=checked]:bg-background',
        // Shadow for depth
        'shadow-[2px_2px_0px_0px] shadow-border',
        // Translation for checked state
        'translate-x-0 data-[state=checked]:translate-x-6',
        // Transition
        'transition-transform',
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
