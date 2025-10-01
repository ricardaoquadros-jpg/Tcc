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
import { ChevronDown, ChevronUp, Filter, ListOrdered } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type DevCategoryCardProps = {
  title: string;
  description: string;
  technologies: Technology[];
  accentColor: 'frontend' | 'backend';
};

const INITIAL_VISIBLE_TECHS = 4;
type SortOption = 'default' | 'difficulty-asc' | 'popularity-desc';
type FilterOption = 'all' | Technology['type'];

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


export function DevCategoryCard({
  title,
  description,
  technologies,
  accentColor,
}: DevCategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sort, setSort] = useState<SortOption>('default');
  const [filter, setFilter] = useState<FilterOption>('all');
  const borderColorClass =
    accentColor === 'frontend' ? 'border-frontend' : 'border-backend';

  const technologyTypes = useMemo(() => {
    const types = new Set(technologies.map(t => t.type));
    return ['all', ...Array.from(types)] as FilterOption[];
  }, [technologies]);

  const filteredAndSortedTechnologies = useMemo(() => {
    let result = [...technologies];

    if (filter !== 'all') {
      result = result.filter(tech => tech.type === filter);
    }

    switch (sort) {
      case 'difficulty-asc':
        result.sort((a, b) => a.difficulty - b.difficulty);
        break;
      case 'popularity-desc':
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'default':
      default:
        // No sort needed for default, keeps original order
        break;
    }
    return result;
  }, [technologies, filter, sort]);


  const visibleTechnologies = isExpanded
    ? filteredAndSortedTechnologies
    : filteredAndSortedTechnologies.slice(0, INITIAL_VISIBLE_TECHS);

  const countsString = useMemo(() => {
    const typeCounts = technologies.reduce((acc, tech) => {
      acc[tech.type] = (acc[tech.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const order: Technology['type'][] = ['Framework', 'Linguagem', 'Biblioteca', 'Ferramenta', 'Plataforma'];
    const parts = order
      .filter(type => typeCounts[type])
      .map(type => `${typeCounts[type]} ${pluralize(type, typeCounts[type])}`);
    
    if(parts.length === 0) return '';
    if(parts.length === 1) return `(${parts[0]})`;
    
    const lastPart = parts.pop();
    return `(${parts.join(', ')} e ${lastPart})`;

  }, [technologies]);

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
        <div className="mb-4 flex flex-wrap items-center justify-between gap-y-2">
            <div className="flex flex-wrap items-baseline gap-x-2">
                <h3 className="text-xl font-headline font-semibold text-foreground">
                Principais Tecnologias
                </h3>
                <span className="text-sm text-muted-foreground">({technologies.length} no total)</span>
            </div>
            <div className="flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8">
                            <Filter className="mr-2 h-4 w-4" />
                            Filtrar
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filtrar por Tipo</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={filter} onValueChange={(value) => setFilter(value as FilterOption)}>
                            {technologyTypes.map(type => (
                                <DropdownMenuRadioItem key={type} value={type}>
                                    {type === 'all' ? 'Todos' : type}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8">
                            <ListOrdered className="mr-2 h-4 w-4" />
                            Ordenar
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ordenar Por</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={sort} onValueChange={(value) => setSort(value as SortOption)}>
                            <DropdownMenuRadioItem value="default">Padrão</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="difficulty-asc">Dificuldade (crescente)</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="popularity-desc">Popularidade (decrescente)</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
        {countsString && <div className="mb-4 text-sm text-muted-foreground -mt-2">{countsString}</div>}
        <div className="grid flex-grow grid-cols-1 gap-4 sm:grid-cols-2">
          {visibleTechnologies.map((tech) => (
            <TechCard
              key={tech.name}
              tech={tech}
            />
          ))}
        </div>
        {filteredAndSortedTechnologies.length > INITIAL_VISIBLE_TECHS && (
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
