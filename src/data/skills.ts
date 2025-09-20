import {
  type IconType,
  SiCsharp,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiSpringboot,
  SiTypescript,
  SiApachekafka,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'react', icon: SiReact },
        { skill: 'nextjs', icon: SiNextdotjs },
      ],
    },
    {
      field: 'Backend',
      skills: [
        { skill: 'nodejs', icon: SiNodedotjs },
        { skill: 'python', icon: SiPython },
        { skill: 'java', icon: SiSpringboot },
        { skill: 'c#', icon: SiCsharp },
        { skill: 'kafka', icon: SiApachekafka },
        { skill: 'redis', icon: SiRedis },
        { skill: 'postgresql', icon: SiPostgresql },
        { skill: 'mongodb', icon: SiMongodb },
        { skill: 'docker', icon: SiDocker },
      ],
    },
  ]

export default SKILLS
