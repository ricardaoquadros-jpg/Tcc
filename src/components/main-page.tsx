"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { DevCategoryCard } from './dev-category-card';
import { frontendTechnologies, backendTechnologies } from '@/lib/constants';
import { AiExplainer } from './ai-explainer';
import { FXBLogo } from './icons/fxb-logo';
import { JobRolesSection } from './job-roles-section';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { ApplicationsSection } from './applications-section';

function MainContent() {
    return (
        <div id="main-content-container" className="pt-8">
            <section id="tech-comparison" className="grid scroll-mt-20 grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start pt-16">
                <DevCategoryCard
                    key="frontend"
                    title="Frontend"
                    description="O frontend é a parte da aplicação com a qual o usuário interage diretamente. É tudo o que você vê na tela: o layout, os botões, as cores e as animações. O objetivo do desenvolvedor frontend é criar uma experiência de usuário (UX) rica e intuitiva."
                    technologies={frontendTechnologies}
                    accentColor="frontend"
                />
                <DevCategoryCard
                    key="backend"
                    title="Backend"
                    description="O backend é o que acontece nos bastidores. Ele gerencia a lógica do servidor, o banco de dados, a autenticação de usuários e as APIs. O desenvolvedor backend garante que tudo funcione de forma segura e eficiente, fornecendo os dados que o frontend exibe."
                    technologies={backendTechnologies}
                    accentColor="backend"
                />
            </section>
            
            <ApplicationsSection />
            <JobRolesSection />
            <AiExplainer />
        </div>
    )
}

export default function MainPage() {
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isExploring, setIsExploring] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (!storedName) {
      router.push('/login');
    } else {
      setUserName(storedName);
      setIsLoading(false);
    }
  }, [router]);

  const handleStartExploring = () => {
    setIsExploring(true);
    const mainContentElement = document.getElementById('main-content-container');
    if (mainContentElement) {
        mainContentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center space-y-4">
          <FXBLogo className="h-16 w-16 animate-pulse text-foreground" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    userName && (
      <div className="flex min-h-screen flex-col">
        <Header userName={userName} isExploring={isExploring} />
        <main className="flex-1">
          <div className="container py-8 md:py-12">
            
            <div className="flex flex-col items-center justify-center text-center" style={{ minHeight: 'calc(100vh - 8rem)'}}>
                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                        Frontend vs. Backend
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                        Explore os dois lados da moeda do desenvolvimento web. Entenda suas responsabilidades, tecnologias e como eles colaboram para criar aplicações incríveis.
                    </p>
                </div>
                <Button size="lg" onClick={handleStartExploring}>
                    Começar a Explorar
                    <ArrowDown className="ml-2" />
                </Button>
            </div>

            {isExploring && <MainContent />}

          </div>
        </main>
      </div>
    )
  );
}