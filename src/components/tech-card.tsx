import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { ComponentType } from 'react';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { Technology } from '@/lib/constants';
import { Progress } from './ui/progress';

type TechCardProps = {
  tech: Technology;
};

const getDifficultyColor = (score: number): string => {
  const colors: { [key: number]: string } = {
    0: '#4CAF50',
    1: '#66BB6A',
    2: '#8BC34A',
    3: '#CDDC39',
    4: '#FFEB3B',
    5: '#FFC107',
    6: '#FF9800',
    7: '#F57C00',
    8: '#E64A19',
    9: '#D32F2F',
    10: '#B71C1C',
  };
  const roundedScore = Math.round(score);
  return colors[roundedScore] || colors[10];
};

const getPopularityColor = (score: number): string => {
  const colors: { [key: number]: string } = {
    10: '#4CAF50',
    9: '#66BB6A',
    8: '#8BC34A',
    7: '#CDDC39',
    6: '#FFEB3B',
    5: '#FFC107',
    4: '#FF9800',
    3: '#F57C00',
    2: '#E64A19',
    1: '#D32F2F',
    0: '#B71C1C',
  };
  const roundedScore = Math.round(score);
  return colors[roundedScore] || colors[0];
};


export function TechCard({ tech }: TechCardProps) {
  const { name, icon: Icon, description, type, detailedDescription, examples, difficulty, popularity } = tech;
  const difficultyColor = getDifficultyColor(difficulty);
  const popularityColor = getPopularityColor(popularity);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="h-full cursor-pointer bg-secondary/30 transition-colors hover:bg-secondary/70">
          <CardHeader className="flex-row items-start gap-4 space-y-0 pb-2">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-background">
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <CardTitle className="font-headline text-lg font-medium">
                {name}
              </CardTitle>
              <Badge variant="secondary" className="mt-1 w-fit">
                {type}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="line-clamp-2 text-sm">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="flex-row items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary">
            <Icon className="h-8 w-8" />
          </div>
          <div>
            <DialogTitle className="font-headline text-2xl">{name}</DialogTitle>
            <Badge variant="outline" className="mt-1">
              {type}
            </Badge>
          </div>
        </DialogHeader>
        <div className="space-y-4 py-4 text-base text-foreground/90">
            <p>{detailedDescription || description}</p>
            {examples && (
              <div>
                <h4 className="font-headline font-semibold text-lg mb-2">Usado por:</h4>
                <p className="text-sm text-muted-foreground">{examples}</p>
              </div>
            )}
            <div className="space-y-4">
              <div>
                  <h4 className="font-headline font-semibold text-lg mb-2">Dificuldade de Aprendizado</h4>
                  <div className="flex items-center gap-4">
                      <Progress value={difficulty * 10} className="w-[85%]" indicatorClassName="transition-all duration-500" style={{'--progress-indicator-color': difficultyColor} as React.CSSProperties} />
                      <span className="font-mono text-lg font-semibold">{difficulty.toFixed(1)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">Ranking de 0 (fácil) a 10 (difícil)</p>
              </div>
              <div>
                  <h4 className="font-headline font-semibold text-lg mb-2">Popularidade</h4>
                  <div className="flex items-center gap-4">
                      <Progress value={popularity * 10} className="w-[85%]" indicatorClassName="transition-all duration-500" style={{'--progress-indicator-color': popularityColor} as React.CSSProperties} />
                      <span className="font-mono text-lg font-semibold">{popularity.toFixed(1)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">Ranking de 0 (nicho) a 10 (mainstream)</p>
              </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
