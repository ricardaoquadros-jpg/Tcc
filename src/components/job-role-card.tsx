import type { JobRole } from "@/lib/job-roles";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, CheckCircle2, DollarSign, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

type JobRoleCardProps = {
    role: JobRole;
};

export function JobRoleCard({ role }: JobRoleCardProps) {

    const formatSalary = (value: number) => {
        return (value / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + 'k';
    }

    return (
        <Card className="flex flex-col h-full bg-card/80">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">{role.title}</CardTitle>
                <CardDescription className="pt-1 text-base">{role.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6">
                <div>
                    <h4 className="mb-3 font-semibold text-foreground">Principais Responsabilidades</h4>
                    <ul className="space-y-2">
                        {role.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary/80 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{resp}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="mb-3 font-semibold text-foreground">Exemplos de Stacks em Empresas</h4>
                    <div className="space-y-4">
                        {role.companies.map((company) => (
                            <div key={company.name} className="flex items-start gap-4">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-muted border">
                                    <company.logo className="h-6 w-6" />
                                </div>
                                <div className="flex-grow">
                                    <p className="font-medium text-foreground/90">{company.name}</p>
                                    <div className="flex flex-wrap gap-2 mt-1.5">
                                        {company.technologies.map(tech => (
                                            <TooltipProvider key={tech.name}>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary p-0.5">
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
                            </div>
                        ))}
                    </div>
                </div>

            </CardContent>
            <CardFooter className="bg-muted/50 p-4 rounded-b-lg mt-auto">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        <div>
                            <p className="text-sm font-semibold text-foreground">
                                {formatSalary(role.salary.min)} - {formatSalary(role.salary.max)} BRL/mês
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Média salarial
                            </p>
                        </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href={role.salary.sourceUrl} target="_blank">
                            Ver fonte <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
