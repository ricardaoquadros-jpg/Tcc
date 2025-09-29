"use client"

import { jobRoles } from "@/lib/job-roles";
import { JobRoleCard } from "./job-role-card";
import { Briefcase } from "lucide-react";

export function JobRolesSection() {
    const frontendRoles = jobRoles.filter(role => role.area === 'Frontend');
    const backendRoles = jobRoles.filter(role => role.area === 'Backend');

    return (
        <section className="mt-12 w-full lg:mt-16">
            <div className="mb-10 text-center">
                <div className="inline-flex items-center justify-center gap-3">
                    <Briefcase className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                        Áreas de Trabalho
                    </h2>
                </div>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Veja como as tecnologias se traduzem em carreiras reais. Explore funções, salários e as stacks usadas por gigantes da tecnologia.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                    <h3 className="mb-6 border-b-4 border-frontend pb-2 font-headline text-3xl">
                        Frontend
                    </h3>
                    <div className="space-y-6">
                        {frontendRoles.map(role => (
                            <JobRoleCard key={role.title} role={role} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="mb-6 border-b-4 border-backend pb-2 font-headline text-3xl">
                        Backend
                    </h3>
                    <div className="space-y-6">
                        {backendRoles.map(role => (
                            <JobRoleCard key={role.title} role={role} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
