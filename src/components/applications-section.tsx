
"use client"

import { useState } from "react";
import { applications } from "@/lib/applications";
import { ApplicationCard } from "./application-card";
import { AppWindow, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

const INITIAL_VISIBLE_APPS = 6;

export function ApplicationsSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    const visibleApplications = isExpanded ? applications : applications.slice(0, INITIAL_VISIBLE_APPS);

    return (
        <section id="applications" className="mt-12 w-full scroll-mt-20 lg:mt-16">
            <div className="mb-10 text-center">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleApplications.map(app => (
                    <ApplicationCard key={app.name} application={app} />
                ))}
            </div>

            {applications.length > INITIAL_VISIBLE_APPS && (
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
