import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { ComponentType } from 'react';
import { Badge } from './ui/badge';

type TechCardProps = {
  name: string;
  description: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  type: string;
};

export function TechCard({ name, icon: Icon, description, type }: TechCardProps) {
  return (
    <Card className="h-full bg-secondary/30 transition-colors hover:bg-secondary/70">
      <CardHeader className="flex-row items-start gap-4 space-y-0 pb-2">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-background">
           <Icon className="h-6 w-6" />
        </div>
        <div className="flex flex-col">
          <CardTitle className="font-headline text-lg font-medium">{name}</CardTitle>
          <Badge variant="secondary" className="mt-1 w-fit">{type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
