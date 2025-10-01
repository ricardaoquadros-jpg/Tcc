
"use client"

import { useMemo, useState } from "react";
import { applications } from "@/lib/applications";
import { ApplicationCard } from "./application-card";
import { AppWindow, ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { frontendTechnologies, backendTechnologies } from "@/lib/constants";

const INITIAL_VISIBLE_APPS = 6;

export function ApplicationsSection() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [frontendFilter, setFrontendFilter] = useState<string | null>(null);
    const [backendFilter, setBackendFilter] = useState<string | null>(null);

    const allFrontendTechs = useMemo(() => {
        const techs = new Set<string>();
        applications.forEach(app => {
            app.technologies.forEach(tech => {
                if (tech.area === 'Frontend') {
                    techs.add(tech.tech.name);
                }
            });
        });
        return Array.from(techs).sort();
    }, []);

    const allBackendTechs = useMemo(() => {
        const techs = new Set<string>();
        applications.forEach(app => {
            app.technologies.forEach(tech => {
                if (tech.area === 'Backend') {
                    techs.add(tech.tech.name);
                }
            });
        });
        return Array.from(techs).sort();
    }, []);

    const filteredApplications = useMemo(() => {
        return applications.filter(app => {
            const hasFrontendTech = frontendFilter ? app.technologies.some(t => t.area === 'Frontend' && t.tech.name === frontendFilter) : true;
            const hasBackendTech = backendFilter ? app.technologies.some(t => t.area === 'Backend' && t.tech.name === backendFilter) : true;
            return hasFrontendTech && hasBackendTech;
        });
    }, [frontendFilter, backendFilter]);

    const visibleApplications = isExpanded ? filteredApplications : filteredApplications.slice(0, INITIAL_VISIBLE_APPS);

    const clearFilters = () => {
        setFrontendFilter(null);
        setBackendFilter(null);
    }

    return (
        <section id="applications" className="mt-12 w-full scroll-mt-20 lg:mt-16">
            <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center gap-3">
                    <AppWindow className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                        Aplicações do Mundo Real
                    </h2>
                </div>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Veja como as gigantes da tecnologia combinam ferramentas de frontend e backend para construir os produtos que você usa todos os dias.
                </p>
            </div>

            <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            <Filter className="mr-2 h-4 w-4" />
                            {frontendFilter ? `Frontend: ${frontendFilter}` : 'Filtrar por Frontend'}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="max-h-64 overflow-y-auto">
                        <DropdownMenuRadioGroup value={frontendFilter ?? ""} onValueChange={(val) => setFrontendFilter(val)}>
                             <DropdownMenuRadioItem value="">Todos</DropdownMenuRadioItem>
                            {allFrontendTechs.map(tech => (
                                <DropdownMenuRadioItem key={tech} value={tech}>{tech}</DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                             <Filter className="mr-2 h-4 w-4" />
                            {backendFilter ? `Backend: ${backendFilter}` : 'Filtrar por Backend'}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="max-h-64 overflow-y-auto">
                        <DropdownMenuRadioGroup value={backendFilter ?? ""} onValueChange={(val) => setBackendFilter(val)}>
                            <DropdownMenuRadioItem value="">Todos</DropdownMenuRadioItem>
                            {allBackendTechs.map(tech => (
                                <DropdownMenuRadioItem key={tech} value={tech}>{tech}</DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                {(frontendFilter || backendFilter) && (
                    <Button variant="ghost" onClick={clearFilters}>
                        <X className="mr-2 h-4 w-4" />
                        Limpar Filtros
                    </Button>
                )}
            </div>

            {visibleApplications.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleApplications.map(app => (
                        <ApplicationCard key={app.name} application={app} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">Nenhuma aplicação encontrada com os filtros selecionados.</p>
                </div>
            )}

            {filteredApplications.length > INITIAL_VISIBLE_APPS && (
                <div className="mt-6 text-center">
                    <Button
                        variant="outline"
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
        </section>
    );
}
