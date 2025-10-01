
"use client"

import { applications } from "@/lib/applications";
import { ApplicationCard } from "./application-card";
import { AppWindow } from "lucide-react";

export function ApplicationsSection() {
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
                {applications.map(app => (
                    <ApplicationCard key={app.name} application={app} />
                ))}
            </div>
        </section>
    );
}