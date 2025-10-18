/**
 * Theme-Aware Component Utilities
 *
 * Helper functions for building theme-responsive components
 */

import { type ThemeMode } from './theme-config'

/**
 * Conditional class utility - applies classes based on aesthetic mode
 *
 * @example
 * <div className={aestheticClass('pixel', 'rounded', 'sharp')}>
 *   // Will have 'rounded' class in pixel mode, 'sharp' in brutal mode
 * </div>
 */
export function aestheticClass(
  mode: ThemeMode,
  pixelClass: string,
  brutalClass: string
): string {
  return mode === 'pixel' ? pixelClass : brutalClass
}

/**
 * Generate class string that adapts based on data-aesthetic attribute
 * Uses CSS attribute selectors for dynamic theme-aware styling
 *
 * @example
 * themeAwareClass({
 *   base: 'p-4 border',
 *   pixel: 'rounded-sm',
 *   brutal: 'rounded-none font-bold'
 * })
 * // Returns: 'p-4 border [html[data-aesthetic=pixel]_&]:rounded-sm [html[data-aesthetic=brutal]_&]:rounded-none [html[data-aesthetic=brutal]_&]:font-bold'
 */
export function themeAwareClass(options: {
  base?: string
  pixel?: string
  brutal?: string
}): string {
  const classes: string[] = []

  if (options.base) {
    classes.push(options.base)
  }

  if (options.pixel) {
    // Tailwind arbitrary variant syntax for data-aesthetic="pixel"
    const pixelClasses = options.pixel
      .split(' ')
      .map(c => `[html[data-aesthetic=pixel]_&]:${c}`)
      .join(' ')
    classes.push(pixelClasses)
  }

  if (options.brutal) {
    // Tailwind arbitrary variant syntax for data-aesthetic="brutal"
    const brutalClasses = options.brutal
      .split(' ')
      .map(c => `[html[data-aesthetic=brutal]_&]:${c}`)
      .join(' ')
    classes.push(brutalClasses)
  }

  return classes.join(' ')
}

/**
 * Style object for inline styles that reference CSS variables
 * Use when Tailwind utilities aren't sufficient
 *
 * @example
 * <div style={themeVarStyle({ backgroundColor: 'var(--main)' })} />
 */
export function themeVarStyle(
  styles: Record<string, string>
): React.CSSProperties {
  return styles as React.CSSProperties
}

/**
 * Common theme-aware component variants
 */
export const themeVariants = {
  /**
   * Card variant - adapts border, shadow, and background
   */
  card: themeAwareClass({
    base: 'border-border bg-secondary-background transition-all',
    pixel: 'rounded border-[2px] shadow-[2px_2px_0px_0px_var(--border)]',
    brutal: 'rounded-none border-[4px] shadow-none',
  }),

  /**
   * Button variant - adapts size and style
   */
  button: themeAwareClass({
    base: 'bg-main text-main-foreground border-border transition-all cursor-pointer',
    pixel: 'border-[2px] px-4 py-2 text-sm',
    brutal: 'border-[3px] px-6 py-3 text-base font-bold',
  }),

  /**
   * Input variant - consistent form styling
   */
  input: themeAwareClass({
    base: 'bg-background text-foreground border-border',
    pixel: 'border-[2px] rounded px-3 py-2',
    brutal: 'border-[3px] rounded-none px-4 py-3',
  }),

  /**
   * Badge variant - small labeled elements
   */
  badge: themeAwareClass({
    base: 'inline-block border-border',
    pixel: 'border-[2px] rounded px-2 py-1 text-xs',
    brutal: 'border-[2px] rounded-none px-3 py-1.5 text-sm font-bold',
  }),
} as const

/**
 * Get CSS variable value from theme
 * Useful for accessing theme colors in JavaScript
 */
export function getThemeVar(varName: string): string {
  if (typeof window === 'undefined') return ''
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
}

/**
 * Check if current aesthetic mode matches
 */
export function isAestheticMode(mode: ThemeMode): boolean {
  if (typeof window === 'undefined') return false
  return document.documentElement.getAttribute('data-aesthetic') === mode
}
