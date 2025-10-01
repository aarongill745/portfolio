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
  SiAmazonecs,
  SiAmazonec2,
  SiAmazons3,
  SiAmazonrds,
  SiAmazondynamodb,
  SiAwslambda,
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
    {
      field: 'Cloud (AWS is all I know...)',
      skills: [
        { skill: 'ecs', icon: SiAmazonecs },
        { skill: 'ec2', icon: SiAmazonec2 },
        { skill: 's3', icon: SiAmazons3 },
        { skill: 'rds', icon: SiAmazonrds },
        { skill: 'dynamodb', icon: SiAmazondynamodb },
        { skill: 'lambda', icon: SiAwslambda },
        { skill: 'msk', icon: SiApachekafka },
      ],
    },
  ]

export default SKILLS
