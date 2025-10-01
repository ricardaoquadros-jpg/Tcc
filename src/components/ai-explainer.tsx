"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getExplanation } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  learningGoals: z.string().min(10, {
    message: 'Por favor, descreva seus objetivos com pelo menos 10 caracteres.',
  }),
});

export function AiExplainer() {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      learningGoals: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setExplanation(null);
    try {
      const result = await getExplanation(values);
      setExplanation(result);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Oh, não! Algo deu errado.',
        description:
          'Não foi possível obter a explicação. Por favor, tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-explainer" className="mt-12 w-full scroll-mt-20 lg:mt-16">
      <Card className="bg-gradient-to-br from-card to-secondary/30">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-3xl">
              Explicação Personalizada com IA
            </CardTitle>
          </div>
          <CardDescription className="pt-2 text-base">
            Tem uma dúvida específica? Descreva o que você quer aprender sobre
            Frontend vs. Backend, e nossa IA criará uma explicação sob medida
            para você.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="learningGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Seus objetivos de aprendizado
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: Quero entender qual área é melhor para criar apps mobile, ou qual tem o maior salário..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Gerando...' : 'Obter Explicação'}
              </Button>
            </form>
          </Form>

          {(isLoading || explanation) && (
             <div className="mt-6">
                <h3 className="font-headline text-xl mb-4">Sua Explicação Personalizada</h3>
                <Card className="bg-background/70">
                  <CardContent className="p-6">
                    {isLoading && (
                      <div className="space-y-3">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    )}
                    {explanation && (
                      <p className="whitespace-pre-wrap text-foreground/90">
                        {explanation}
                      </p>
                    )}
                  </CardContent>
                </Card>
             </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
