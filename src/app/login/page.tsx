import { FXBLogo } from '@/components/icons/fxb-logo';
import { LoginForm } from '@/components/login-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <div className="flex animate-fade-in-up flex-col items-center space-y-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <FXBLogo className="h-16 w-16 text-foreground" />
          <h1 className="text-4xl font-headline font-bold text-foreground">
            Front x Back
          </h1>
          <p className="max-w-md text-muted-foreground">
            Desvende os mistérios do desenvolvimento web, começando pela
            diferença fundamental entre Frontend e Backend.
          </p>
        </div>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Bem-vindo!</CardTitle>
            <CardDescription>
              Para começar sua jornada, digite seu nome abaixo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
