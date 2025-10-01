
"use client";

import { useState } from 'react';
import type { Application } from "@/lib/applications";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { getTechExplanation } from '@/app/actions';
import { Skeleton } from './ui/skeleton';
import { Sparkles } from 'lucide-react';
import { Technology } from '@/lib/constants';
import Image from 'next/image';

type ApplicationCardProps = {
    application: Application;
};

function TechExplanation({ appName, tech }: { appName: string, tech: Technology }) {
    const [explanation, setExplanation] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGetExplanation = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await getTechExplanation({ applicationName: appName, technologyName: tech.name });
            setExplanation(result);
        } catch (e) {
            setError('Não foi possível gerar a explicação. Tente novamente.');
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="rounded-lg border bg-background/50 p-4">
            <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-background border">
                    <tech.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                    <h5 className="font-semibold">{tech.name}</h5>
                    <p className="text-sm text-muted-foreground">{tech.type}</p>
                </div>
                {!explanation && !isLoading && (
                    <Button size="sm" variant="ghost" onClick={handleGetExplanation} className="ml-auto flex-shrink-0">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Explicar
                    </Button>
                )}
            </div>
            {isLoading && (
                <div className="mt-3 space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-4/5" />
                </div>
            )}
            {explanation && (
                <p className="mt-3 text-sm text-foreground/80">{explanation}</p>
            )}
            {error && (
                 <p className="mt-3 text-sm text-destructive">{error}</p>
            )}
        </div>
    )
}

export function ApplicationCard({ application }: ApplicationCardProps) {
    const frontendTechs = application.technologies.filter(t => t.area === 'Frontend');
    const backendTechs = application.technologies.filter(t => t.area === 'Backend');

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardHeader className="flex-row items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-muted border overflow-hidden">
                             <Image src={application.logo} alt={`${application.name} logo`} width={48} height={48} className="object-cover" />
                        </div>
                        <div>
                            <CardTitle className="font-headline text-xl">{application.name}</CardTitle>
                            <CardDescription className="text-sm pt-1">{application.description}</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        {frontendTechs.length > 0 && (
                            <div>
                                <h4 className="font-semibold text-frontend mb-2 text-sm">Frontend</h4>
                                <div className="flex flex-wrap gap-2">
                                    {frontendTechs.map(({ tech }) => (
                                        <TooltipProvider key={tech.name}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary p-1">
                                                        <tech.icon className="h-full w-full" />
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{tech.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ))}
                                </div>
                            </div>
                        )}
                        {backendTechs.length > 0 && (
                            <div>
                                <h4 className="font-semibold text-backend mb-2 text-sm">Backend</h4>
                                <div className="flex flex-wrap gap-2">
                                    {backendTechs.map(({ tech }) => (
                                        <TooltipProvider key={tech.name}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary p-1">
                                                        <tech.icon className="h-full w-full" />
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{tech.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ))}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
                <DialogHeader className="flex-row items-center gap-4">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-muted border overflow-hidden">
                        <Image src={application.logo} alt={`${application.name} logo`} width={64} height={64} className="object-cover" />
                    </div>
                    <div>
                        <DialogTitle className="font-headline text-2xl">Stack de Tecnologias do {application.name}</DialogTitle>
                         <p className="text-muted-foreground text-sm">{application.description}</p>
                    </div>
                </DialogHeader>
                <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[60vh] overflow-y-auto pr-4">
                    {frontendTechs.length > 0 && (
                        <div className="space-y-4">
                             <h3 className="font-headline text-xl border-b-2 border-frontend pb-1">Frontend</h3>
                             <div className='space-y-3'>
                                {frontendTechs.map(({tech}) => (
                                    <TechExplanation key={tech.name} appName={application.name} tech={tech} />
                                ))}
                             </div>
                        </div>
                    )}
                     {backendTechs.length > 0 && (
                        <div className="space-y-4">
                            <h3 className="font-headline text-xl border-b-2 border-backend pb-1">Backend</h3>
                             <div className='space-y-3'>
                                {backendTechs.map(({tech}) => (
                                    <TechExplanation key={tech.name} appName={application.name} tech={tech} />
                                ))}
                             </div>
                        </div>
                    )}
                </div>
                 <p className="text-xs text-muted-foreground text-center px-4 pt-2">Clique em "Explicar" para que a IA gere uma descrição da funcionalidade de cada tecnologia dentro do contexto do {application.name}.</p>
            </DialogContent>
        </Dialog>
    );
}

    