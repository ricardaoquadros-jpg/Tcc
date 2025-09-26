import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TechCard } from './tech-card';
import type { Technology } from '@/lib/constants';
import { cn } from '@/lib/utils';

type DevCategoryCardProps = {
  title: string;
  description: string;
  technologies: Technology[];
  accentColor: 'frontend' | 'backend';
};

export function DevCategoryCard({
  title,
  description,
  technologies,
  accentColor,
}: DevCategoryCardProps) {
  const borderColorClass =
    accentColor === 'frontend' ? 'border-frontend' : 'border-backend';

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
      <CardHeader>
        <CardTitle
          className={cn(
            'border-b-4 pb-2 font-headline text-3xl',
            borderColorClass
          )}
        >
          {title}
        </CardTitle>
        <CardDescription className="pt-4 text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <h3 className="mb-4 text-xl font-headline font-semibold text-foreground">
          Principais Tecnologias
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {technologies.map((tech) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              description={tech.description}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
