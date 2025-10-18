/**
 * Theme Configuration System
 *
 * This is the single source of truth for all theme values.
 * Each theme is a complete, isolated configuration that defines:
 * - Colors (backgrounds, foregrounds, accents)
 * - Spacing (borders, shadows, offsets)
 * - Typography (weights, families)
 * - Visual style (border radius, image rendering)
 */

export type ThemeMode = 'pixel' | 'brutal'
export type ColorScheme = 'light' | 'dark'

/**
 * Complete theme token definition
 */
export interface ThemeTokens {
  // Color tokens
  colors: {
    background: string
    secondaryBackground: string
    foreground: string
    mainForeground: string
    main: string
    accent: string
    border: string
    ring: string
    overlay: string

    // Timeline-specific colors
    timelineConnector: string
    timelineBorder: string
    companyTitle: string

    // Skill badge colors
    skillBg: string
    skillText: string
    skillBorder: string

    // Grid background (pixel mode only)
    grid?: string

    // Pixel mode vibrant colors
    pixelGold?: string
    pixelPurple?: string
    pixelCyan?: string
    pixelPink?: string
    pixelOrange?: string
    pixelYellow?: string
    pixelRed?: string
    pixelBlue?: string
  }

  // Spacing tokens
  spacing: {
    borderWidth: string
    buttonBorderWidth: string
    shadowOffset: string
    scrollbarWidth: string
  }

  // Shadow tokens
  shadows: {
    default: string
  }

  // Typography tokens
  typography: {
    weightBase: string
    weightHeading: string
    fontFamily: string
  }

  // Visual style tokens
  visual: {
    borderRadius: string
    dotRadius: string
    imageRendering?: string
  }
}

/**
 * Pixel Light Theme
 */
const pixelLight: ThemeTokens = {
  colors: {
    background: '#f8f9ff',
    secondaryBackground: '#ffffff',
    foreground: '#1a1a2e',
    mainForeground: '#000000',
    main: '#ffd700',
    accent: '#ff6b35',
    border: '#2d2d44',
    ring: '#ffd700',
    overlay: 'rgba(255, 255, 255, 0.9)',
    timelineConnector: '#91a3c2',
    timelineBorder: '#2d2d44',
    companyTitle: '#91a3c2',
    skillBg: '#ffd700',
    skillText: '#000000',
    skillBorder: '#2d2d44',
    grid: 'rgba(45, 45, 68, 0.1)',

    // Vibrant pixel colors
    pixelGold: '#ffd700',
    pixelPurple: '#9d4edd',
    pixelCyan: '#00d9ff',
    pixelPink: '#ff006e',
    pixelOrange: '#ff6b35',
    pixelYellow: '#FFDB58',
    pixelRed: '#FF4911',
    pixelBlue: '#3300FF',
  },
  spacing: {
    borderWidth: '2px',
    buttonBorderWidth: '2px',
    shadowOffset: '2px',
    scrollbarWidth: '16px',
  },
  shadows: {
    default: '2px 2px 0px 0px',
  },
  typography: {
    weightBase: '400',
    weightHeading: '400',
    fontFamily: 'var(--font-pixel)',
  },
  visual: {
    borderRadius: '4px',
    dotRadius: '0%',
    imageRendering: 'pixelated',
  },
}

/**
 * Pixel Dark Theme
 */
const pixelDark: ThemeTokens = {
  colors: {
    background: '#0a0a0f',
    secondaryBackground: '#16141d',
    foreground: '#c7c5d1',
    mainForeground: '#000000',
    main: '#b8860b',
    accent: '#8b2635',
    border: '#2a1f2d',
    ring: '#b8860b',
    overlay: 'rgba(10, 10, 15, 0.85)',
    timelineConnector: '#91a3c2',
    timelineBorder: '#2a1f2d',
    companyTitle: '#c7c5d1',
    skillBg: '#2a1f2d',
    skillText: '#c7c5d1',
    skillBorder: '#c7c5d1',
    grid: 'rgba(42, 31, 45, 0.3)',

    // Vibrant pixel colors (dark variants)
    pixelGold: '#ffd700',
    pixelPurple: '#c77dff',
    pixelCyan: '#4cc9f0',
    pixelPink: '#ff0a54',
    pixelOrange: '#ff6b35',
    pixelYellow: '#FFDB58',
    pixelRed: '#FF4911',
    pixelBlue: '#3300FF',
  },
  spacing: {
    borderWidth: '2px',
    buttonBorderWidth: '2px',
    shadowOffset: '2px',
    scrollbarWidth: '16px',
  },
  shadows: {
    default: '2px 2px 0px 0px',
  },
  typography: {
    weightBase: '400',
    weightHeading: '400',
    fontFamily: 'var(--font-pixel)',
  },
  visual: {
    borderRadius: '4px',
    dotRadius: '0%',
    imageRendering: 'pixelated',
  },
}

/**
 * Brutal Light Theme
 */
const brutalLight: ThemeTokens = {
  colors: {
    background: '#fef9f3',
    secondaryBackground: '#ffffff',
    foreground: '#000000',
    mainForeground: '#000000',
    main: '#facc15',
    accent: '#fb923c',
    border: '#000000',
    ring: '#facc15',
    overlay: 'rgba(255, 255, 255, 0.95)',
    timelineConnector: '#ffffff',
    timelineBorder: '#000000',
    companyTitle: '#91a3c2',
    skillBg: '#facc15',
    skillText: '#000000',
    skillBorder: '#000000',
  },
  spacing: {
    borderWidth: '4px',
    buttonBorderWidth: '3px',
    shadowOffset: '6px',
    scrollbarWidth: '20px',
  },
  shadows: {
    default: '6px 6px 0px 0px',
  },
  typography: {
    weightBase: '500',
    weightHeading: '700',
    fontFamily: 'var(--font-modern)',
  },
  visual: {
    borderRadius: '0px',
    dotRadius: '50%',
  },
}

/**
 * Brutal Dark Theme
 */
const brutalDark: ThemeTokens = {
  colors: {
    background: '#0a0a0a',
    secondaryBackground: '#1a1a1a',
    foreground: '#ffffff',
    mainForeground: '#000000',
    main: '#facc15',
    accent: '#fb923c',
    border: '#000000',
    ring: '#facc15',
    overlay: 'rgba(0, 0, 0, 0.9)',
    timelineConnector: '#ffffff',
    timelineBorder: '#ffffff',
    companyTitle: '#ffffff',
    skillBg: '#000000',
    skillText: '#ffffff',
    skillBorder: '#ffffff',
  },
  spacing: {
    borderWidth: '4px',
    buttonBorderWidth: '3px',
    shadowOffset: '6px',
    scrollbarWidth: '20px',
  },
  shadows: {
    default: '6px 6px 0px 0px',
  },
  typography: {
    weightBase: '500',
    weightHeading: '700',
    fontFamily: 'var(--font-modern)',
  },
  visual: {
    borderRadius: '0px',
    dotRadius: '50%',
  },
}

/**
 * Theme registry - maps theme combinations to their configurations
 */
export const themes = {
  pixel: {
    light: pixelLight,
    dark: pixelDark,
  },
  brutal: {
    light: brutalLight,
    dark: brutalDark,
  },
} as const

/**
 * Get theme configuration for a specific mode and color scheme
 */
export function getThemeConfig(mode: ThemeMode, colorScheme: ColorScheme): ThemeTokens {
  return themes[mode][colorScheme]
}

/**
 * Helper to get all theme modes
 */
export const themeModes: ThemeMode[] = ['pixel', 'brutal']

/**
 * Helper to get all color schemes
 */
export const colorSchemes: ColorScheme[] = ['light', 'dark']
