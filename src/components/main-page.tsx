"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { DevCategoryCard } from './dev-category-card';
import { frontendTechnologies, backendTechnologies } from '@/lib/constants';
import { AiExplainer } from './ai-explainer';
import { CodeClarityLogo } from './icons/code-clarity-logo';

export default function MainPage() {
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center space-y-4">
          <CodeClarityLogo className="h-16 w-16 animate-pulse text-frontend" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    userName && (
      <div className="flex min-h-screen flex-col">
        <Header userName={userName} />
        <main className="flex-1">
          <div className="container py-8 md:py-12">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                Frontend vs. Backend
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Explore os dois lados da moeda do desenvolvimento web. Entenda suas responsabilidades, tecnologias e como eles colaboram para criar aplicações incríveis.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              <DevCategoryCard
                title="Frontend"
                description="O frontend é a parte da aplicação com a qual o usuário interage diretamente. É tudo o que você vê na tela: o layout, os botões, as cores e as animações. O objetivo do desenvolvedor frontend é criar uma experiência de usuário (UX) rica e intuitiva."
                technologies={frontendTechnologies}
                accentColor="frontend"
              />
              <DevCategoryCard
                title="Backend"
                description="O backend é o que acontece nos bastidores. Ele gerencia a lógica do servidor, o banco de dados, a autenticação de usuários e as APIs. O desenvolvedor backend garante que tudo funcione de forma segura e eficiente, fornecendo os dados que o frontend exibe."
                technologies={backendTechnologies}
                accentColor="backend"
              />
            </div>

            <AiExplainer />
          </div>
        </main>
      </div>
    )
  );
}
