"use client";

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TechCard } from './tech-card';
import type { Technology } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

type DevCategoryCardProps = {
  title: string;
  description: string;
  technologies: Technology[];
  accentColor: 'frontend' | 'backend';
};

const INITIAL_VISIBLE_TECHS = 4;

export function DevCategoryCard({
  title,
  description,
  technologies,
  accentColor,
}: DevCategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const borderColorClass =
    accentColor === 'frontend' ? 'border-frontend' : 'border-backend';

  const visibleTechnologies = isExpanded
    ? technologies
    : technologies.slice(0, INITIAL_VISIBLE_TECHS);

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
      <CardContent className="flex flex-col flex-grow">
        <h3 className="mb-4 text-xl font-headline font-semibold text-foreground">
          Principais Tecnologias
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {visibleTechnologies.map((tech) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              description={tech.description}
            />
          ))}
        </div>
      </CardContent>
      {technologies.length > INITIAL_VISIBLE_TECHS && (
        <CardFooter className="mt-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Ver menos' : 'Ver mais'}
            {isExpanded ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}