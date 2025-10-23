
"use client";

import { FXBLogo } from '@/components/icons/fxb-logo';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type HeaderProps = {
  userName: string;
  isExploring: boolean;
};

const navLinks = [
    { href: '#tech-comparison', label: 'Tecnologias' },
    { href: '#applications', label: 'Aplicações' },
    { href: '#job-roles', label: 'Áreas de Trabalho' },
    { href: '#ai-explainer', label: 'Explicação com IA' },
    { href: 'https://docs.google.com/forms/d/1uuFFCr333-F88wdLOD3o8gHyPRXAxW8dWCY6ww4mPf4/edit?pli=1#responses', label: 'Pesquisa' },
]

export function Header({ userName, isExploring }: HeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('userName');
    router.push('/login');
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6" style={{ minWidth: '200px'}}>
          <div className="hidden items-center md:flex">
            <FXBLogo className="mr-2 h-8 w-8 text-foreground" />
            <span className="font-headline text-xl font-bold">Front x Back</span>
          </div>
        </div>

        <div className="flex-1">
          {isExploring && (
              <nav className="hidden md:flex items-center justify-center space-x-6 text-sm font-medium">
                  {navLinks.map(link => {
                      const isExternal = link.href.startsWith('http');
                      return (
                          <Link
                              key={link.href}
                              href={link.href}
                              onClick={isExternal ? undefined : handleScroll}
                              target={isExternal ? '_blank' : undefined}
                              rel={isExternal ? 'noopener noreferrer' : undefined}
                              className="text-muted-foreground transition-colors hover:text-foreground"
                          >
                              {link.label}
                          </Link>
                      )
                  })}
              </nav>
          )}
        </div>

        <div className="flex items-center justify-end space-x-4" style={{ minWidth: '200px'}}>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            Bem-vindo,{' '}
            <span className="font-semibold text-foreground">{userName}</span>!
          </span>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
}
