import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
} from '@icons-pack/react-simple-icons'
import { FileText } from 'lucide-react'

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
    <div className="links-container mr-auto mt-6 flex w-full flex-wrap items-center gap-6">
      {links.map((link, id) => {
        return (
          <a
            target="_blank"
            key={id}
            href={link.href}
            className="pixel-border bg-pixel-blue hover:bg-white dark:hover:bg-purple-400 p-3 transition-colors duration-100 flex items-center gap-2"
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
        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/AaronGillResume.pdf`}
        rel="noopener noreferrer"
        className="pixel-border bg-pixel-blue hover:bg-white dark:hover:bg-purple-400 p-3 transition-colors duration-100 flex items-center gap-2"
        aria-label="View Resume"
      >
        <FileText size={16} className="text-main-foreground" />
        <span className="text-main-foreground text-sm uppercase">Resume</span>
      </a>
      
    </div>
  )
}
