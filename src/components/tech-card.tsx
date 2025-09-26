import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { ComponentType } from 'react';

type TechCardProps = {
  name: string;
  description: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
};

export function TechCard({ name, icon: Icon, description }: TechCardProps) {
  return (
    <Card className="h-full bg-secondary/30 transition-colors hover:bg-secondary/70">
      <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
           <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="font-headline text-lg font-medium">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
