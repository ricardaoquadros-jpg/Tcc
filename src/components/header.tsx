"use client";

import { FXBLogo } from '@/components/icons/fxb-logo';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

type HeaderProps = {
  userName: string;
};

export function Header({ userName }: HeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('userName');
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <FXBLogo className="mr-2 h-8 w-8 text-foreground" />
          <span className="font-headline text-xl font-bold">Front x Back</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
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
