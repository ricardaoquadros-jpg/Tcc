"use client";

import { useState, useMemo } from 'react';
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

  const typeCounts = useMemo(() => {
    return technologies.reduce((acc, tech) => {
      acc[tech.type] = (acc[tech.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [technologies]);

  const pluralize = (word: string, count: number) => {
    if (count === 1) {
      if (word === 'Ferramenta') return 'Ferramenta';
      if (word === 'Plataforma') return 'Plataforma';
      if (word === 'Biblioteca') return 'Biblioteca';
      if (word === 'Linguagem') return 'Linguagem';
    }
    if (word.endsWith('m')) {
      return word.slice(0, -1) + 'ns';
    }
    return word + 's';
  }

  const countsString = useMemo(() => {
    const order: Technology['type'][] = ['Framework', 'Linguagem', 'Biblioteca', 'Ferramenta', 'Plataforma'];
    const parts = order
      .filter(type => typeCounts[type])
      .map(type => `${typeCounts[type]} ${pluralize(type, typeCounts[type])}`);
    
    if(parts.length === 0) return '';
    if(parts.length === 1) return `(${parts[0]})`;
    
    const lastPart = parts.pop();
    return `(${parts.join(', ')} e ${lastPart})`;

  }, [typeCounts]);

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
      <CardContent className="flex flex-grow flex-col">
        <div className="mb-4 flex flex-wrap items-baseline gap-x-2">
            <h3 className="text-xl font-headline font-semibold text-foreground">
              Principais Tecnologias
            </h3>
            {countsString && <span className="text-sm text-muted-foreground">{countsString}</span>}
        </div>
        <div className="grid flex-grow grid-cols-1 gap-4 sm:grid-cols-2">
          {visibleTechnologies.map((tech) => (
            <TechCard
              key={tech.name}
              tech={tech}
            />
          ))}
        </div>
        {technologies.length > INITIAL_VISIBLE_TECHS && (
          <div className="mt-auto pt-6">
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
          </div>
        )}
      </CardContent>
    </Card>
  );
}
