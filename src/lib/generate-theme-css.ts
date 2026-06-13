/**
 * CSS Variable Generator
 *
 * Converts theme configuration objects into CSS custom properties.
 * This eliminates manual CSS variable management and ensures consistency.
 */

import { type ThemeTokens, getThemeConfig, type ThemeMode, type ColorScheme } from './theme-config'

/**
 * Convert a theme configuration object to CSS custom properties
 */
function tokensToCSS(tokens: ThemeTokens): Record<string, string> {
  return {
    // Color variables
    '--background': tokens.colors.background,
    '--secondary-background': tokens.colors.secondaryBackground,
    '--foreground': tokens.colors.foreground,
    '--main-foreground': tokens.colors.mainForeground,
    '--main': tokens.colors.main,
    '--accent': tokens.colors.accent,
    '--border': tokens.colors.border,
    '--ring': tokens.colors.ring,
    '--overlay': tokens.colors.overlay,
    '--timeline-connector': tokens.colors.timelineConnector,
    '--timeline-border': tokens.colors.timelineBorder,
    '--company-title-color': tokens.colors.companyTitle,
    '--skill-bg': tokens.colors.skillBg,
    '--skill-text': tokens.colors.skillText,
    '--skill-border': tokens.colors.skillBorder,

    // Optional pixel-specific colors
    ...(tokens.colors.grid && { '--grid-color': tokens.colors.grid }),
    ...(tokens.colors.pixelGold && { '--pixel-gold': tokens.colors.pixelGold }),
    ...(tokens.colors.pixelPurple && { '--pixel-purple': tokens.colors.pixelPurple }),
    ...(tokens.colors.pixelCyan && { '--pixel-cyan': tokens.colors.pixelCyan }),
    ...(tokens.colors.pixelPink && { '--pixel-pink': tokens.colors.pixelPink }),
    ...(tokens.colors.pixelOrange && { '--pixel-orange': tokens.colors.pixelOrange }),
    ...(tokens.colors.pixelYellow && { '--pixel-yellow': tokens.colors.pixelYellow }),
    ...(tokens.colors.pixelRed && { '--pixel-red': tokens.colors.pixelRed }),
    ...(tokens.colors.pixelBlue && { '--pixel-blue': tokens.colors.pixelBlue }),

    // Spacing variables
    '--border-width': tokens.spacing.borderWidth,
    '--button-border-width': tokens.spacing.buttonBorderWidth,
    '--shadow-offset': tokens.spacing.shadowOffset,
    '--scrollbar-width': tokens.spacing.scrollbarWidth,

    // Shadow variables
    '--shadow': `${tokens.shadows.default} var(--border)`,

    // Typography variables
    '--font-weight-base': tokens.typography.weightBase,
    '--font-weight-heading': tokens.typography.weightHeading,

    // Visual style variables
    '--dot-radius': tokens.visual.dotRadius,
    ...(tokens.visual.imageRendering && { '--image-rendering': tokens.visual.imageRendering }),
  }
}

/**
 * Generate CSS rule for a specific selector and theme tokens
 */
function generateCSSRule(selector: string, tokens: ThemeTokens): string {
  const cssVars = tokensToCSS(tokens)
  const declarations = Object.entries(cssVars)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n')

  return `${selector} {\n${declarations}\n}`
}

/**
 * Generate all CSS rules for the theme system
 */
export function generateThemeCSS(): string {
  const rules: string[] = []

  // Pixel light theme
  const pixelLightTokens = getThemeConfig('pixel', 'light')
  rules.push(generateCSSRule(':root', pixelLightTokens))

  // Pixel dark theme
  const pixelDarkTokens = getThemeConfig('pixel', 'dark')
  rules.push(generateCSSRule('.dark', pixelDarkTokens))

  return rules.join('\n\n')
}

/**
 * Get CSS variables object for inline styles (if needed)
 * This allows components to access theme values directly
 */
export function getThemeCSSVars(mode: ThemeMode, colorScheme: ColorScheme): Record<string, string> {
  const tokens = getThemeConfig(mode, colorScheme)
  return tokensToCSS(tokens)
}
