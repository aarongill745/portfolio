import SKILLS from '@/data/skills'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Technology brand colors mapping
const TECH_COLORS: Record<string, string> = {
  html: 'bg-[#E34F26]', // HTML orange
  css: 'bg-[#1572B6]', // CSS blue
  typescript: 'bg-[#3178C6]', // TypeScript blue
  react: 'bg-gradient-to-r from-[#61DAFB] to-[#20232A]', // React cyan to dark
  nextjs: 'bg-gradient-to-r from-[#000000] to-[#FFFFFF]', // Next.js black to white
  nodejs: 'bg-[#339933]', // Node.js green
  java: 'bg-[#6DB33F]', // Spring green
  python: 'bg-gradient-to-r from-[#3776AB] to-[#FFD43B]', // Python blue to yellow
  'c#': 'bg-[#512BD4]', // C# purple
  kafka: 'bg-[#231F20]', // Kafka black
  redis: 'bg-[#DC382D]', // Redis red
  postgresql: 'bg-[#336791]', // PostgreSQL blue
  mongodb: 'bg-[#47A248]', // MongoDB green
  docker: 'bg-[#2496ED]', // Docker blue
  'aws ecs': 'bg-[#FF9900]', // AWS ECS orange
  'aws ec2': 'bg-[#F58536]', // AWS EC2 orange-red
  'aws s3': 'bg-[#3F9F41]', // AWS S3 green
  'aws rds': 'bg-[#2C5AA0]', // AWS RDS blue
  'aws dynamodb': 'bg-[#FF6600]', // AWS DynamoDB orange
  'aws lambda': 'bg-[#FF9900]', // AWS Lambda orange
  'aws msk': 'bg-[#231F20]', // Kafka black (for MSK)
}

// Text colors for better contrast on different backgrounds
const TEXT_COLORS: Record<string, string> = {
  react: 'text-white',
  python: 'text-white',
}

export default function Skills() {
  return (
    <div className="mb-16">
      <h2 className="text-xl font-heading sm:text-2xl mb-2">Skills</h2>
      <p className='text-xs mb-8'>Here are some things I know</p>


      {SKILLS.map((item, id) => {
        return (
          <div key={id}>
            <h3 className="mb-4 text-lg font-heading sm:text-xl">
              {item.field}
            </h3>

            <div className="mb-10 flex flex-wrap gap-5">
              {item.skills.map((skill, id) => {
                return (
                  <TooltipProvider key={id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <skill.icon className="h-8 w-8" title="" />
                      </TooltipTrigger>
                      <TooltipContent
                        className={`${TECH_COLORS[skill.skill] || 'bg-main'} ${TEXT_COLORS[skill.skill] || 'text-white'} border-2 border-black font-pixel uppercase tracking-wider px-4 py-2`}
                      >
                        {skill.skill}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
