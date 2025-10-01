import type { Application } from "@/lib/applications";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

type ApplicationCardProps = {
    application: Application;
};

export function ApplicationCard({ application }: ApplicationCardProps) {
    const frontendTechs = application.technologies.filter(t => t.area === 'Frontend');
    const backendTechs = application.technologies.filter(t => t.area === 'Backend');

    return (
        <Card className="flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex-row items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-muted border">
                    <application.logo className="h-7 w-7" />
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
    );
}