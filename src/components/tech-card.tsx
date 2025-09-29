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

type TechCardProps = {
  name: string;
  description: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  type: string;
};

export function TechCard({ name, icon: Icon, description, type }: TechCardProps) {
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex-row items-center gap-4">
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
        <div className="py-4 text-base text-foreground/90">
            <p>{description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
