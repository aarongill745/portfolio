/**
 * Resume configuration
 * Centralizes resume file path management with GitHub Pages base path support
 */

const GITHUB_PAGES_BASE = '/portfolio'

export const RESUME = {
  fileName: 'AaronGillResume.pdf',
  // Constructs the full path: /portfolio/data/AaronGillResume.pdf
  path: `${GITHUB_PAGES_BASE}/data/AaronGillResume.pdf`,
}
