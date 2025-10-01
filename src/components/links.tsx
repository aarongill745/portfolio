import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGithub,
      href: 'https://github.com/aarongill745',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/aarongill745',
    },
  ]

  return (
    <div className="mr-auto mt-6 flex w-full flex-wrap items-center gap-6">
      {links.map((link, id) => {
        return (
          <a
            target="_blank"
            key={id}
            href={link.href}
            className="pixel-border bg-pixel-blue hover:bg-white dark:hover:bg-purple-400 p-3 transition-colors duration-100"
          >
            <link.icon size={16} className="text-main-foreground" />
          </a>
        )
      })}
    </div>
  )
}
