import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
} from '@icons-pack/react-simple-icons'
import { FileText } from 'lucide-react'
import { RESUME } from '@/data/resume'

export default function Links() {
  const links: { icon: IconType; href: string; label: string }[] = [
    {
      icon: SiGithub,
      href: 'https://github.com/aarongill745',
      label: 'Github',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/aarongill745',
      label: 'LinkedIn',
    },
  ]

  return (
    <div className="links-container mt-6 mr-auto flex w-full flex-wrap items-center gap-6">
      {links.map((link, id) => {
        return (
          <a
            target="_blank"
            key={id}
            href={link.href}
            className="pixel-border bg-pixel-blue dark:hover:bg-secondary-background flex items-center gap-2 p-3 transition-colors duration-100 hover:bg-white"
          >
            <link.icon size={16} className="text-main-foreground" />
            <span className="text-main-foreground text-sm uppercase">
              {link.label}
            </span>
          </a>
        )
      })}

      {/* Resume button */}
      <a
        target="_blank"
        href={RESUME.path}
        rel="noopener noreferrer"
        className="pixel-border bg-pixel-blue dark:hover:bg-secondary-background flex items-center gap-2 p-3 transition-colors duration-100 hover:bg-white"
        aria-label="View Resume"
      >
        <FileText size={16} className="text-main-foreground" />
        <span className="text-main-foreground text-sm uppercase">Resume</span>
      </a>
    </div>
  )
}
