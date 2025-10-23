
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { ComponentType } from 'react';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { Technology } from '@/lib/constants';
import { Progress } from './ui/progress';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { CornerDownLeft, Sparkles } from 'lucide-react';
import { getTechChatAnswer } from '@/app/actions';
import { ScrollArea } from './ui/scroll-area';
import { Skeleton } from './ui/skeleton';

type TechCardProps = {
  tech: Technology;
};

type ChatMessage = {
  sender: 'user' | 'ai';
  text: string;
};

function TechChat({ techName }: { techName: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const answer = await getTechChatAnswer({
        technologyName: techName,
        question: input,
      });
      const aiMessage: ChatMessage = { sender: 'ai', text: answer };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = {
        sender: 'ai',
        text: 'Desculpe, não consegui processar sua pergunta. Tente novamente.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 rounded-lg border bg-background/50 p-4">
      <h4 className="font-headline font-semibold text-lg mb-2 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        Pergunte à IA sobre {techName}
      </h4>
      <ScrollArea className="h-48 w-full pr-4">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-2 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'ai' && (
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
              )}
              <div
                className={`max-w-xs rounded-lg px-3 py-2 text-sm ${
                  msg.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-2 justify-start">
               <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
              <div className="max-w-xs rounded-lg px-3 py-2 bg-muted space-y-2">
                 <Skeleton className="h-3 w-32" />
                 <Skeleton className="h-3 w-40" />
                 <Skeleton className="h-3 w-24" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <form onSubmit={handleChatSubmit} className="mt-4 flex items-center gap-2">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ex: Como ${techName} se compara a...?`}
          className="flex-1"
          disabled={isLoading}
        />
        <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
          <CornerDownLeft className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}


const getDifficultyColor = (score: number): string => {
  const colors: { [key: number]: string } = {
    0: '#4CAF50',
    1: '#66BB6A',
    2: '#8BC34A',
    3: '#CDDC39',
    4: '#FFEB3B',
    5: '#FFC107',
    6: '#FF9800',
    7: '#F57C00',
    8: '#E64A19',
    9: '#D32F2F',
    10: '#B71C1C',
  };
  const roundedScore = Math.round(score);
  return colors[roundedScore] || colors[10];
};

const getPopularityColor = (score: number): string => {
  const colors: { [key: number]: string } = {
    10: '#4CAF50',
    9: '#66BB6A',
    8: '#8BC34A',
    7: '#CDDC39',
    6: '#FFEB3B',
    5: '#FFC107',
    4: '#FF9800',
    3: '#F57C00',
    2: '#E64A19',
    1: '#D32F2F',
    0: '#B71C1C',
  };
  const roundedScore = Math.round(score);
  return colors[roundedScore] || colors[0];
};


export function TechCard({ tech }: TechCardProps) {
  const { name, icon: Icon, description, type, detailedDescription, examples, difficulty, popularity } = tech;
  const difficultyColor = getDifficultyColor(difficulty);
  const popularityColor = getPopularityColor(popularity);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="h-full cursor-pointer bg-secondary/30 transition-colors hover:bg-secondary/70 relative overflow-hidden">
          <div className="absolute top-2 right-2 flex space-x-1.5">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: difficultyColor }} title={`Dificuldade: ${difficulty.toFixed(1)}`} />
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: popularityColor }} title={`Popularidade: ${popularity.toFixed(1)}`} />
          </div>
          <CardHeader className="flex-row items-start gap-4 space-y-0 pb-2">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-background">
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <CardTitle className="font-headline text-lg font-medium">
                {name}
              </CardTitle>
              <Badge variant="secondary" className="mt-1 w-fit">
                {type}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="line-clamp-2 text-sm">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="flex-row items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary">
            <Icon className="h-8 w-8" />
          </div>
          <div>
            <DialogTitle className="font-headline text-2xl">{name}</DialogTitle>
            <Badge variant="outline" className="mt-1">
              {type}
            </Badge>
          </div>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <div className="space-y-4 py-4 text-base text-foreground/90">
              <p>{detailedDescription || description}</p>
              {examples && (
                <div>
                  <h4 className="font-headline font-semibold text-lg mb-2">Usado por:</h4>
                  <p className="text-sm text-muted-foreground">{examples}</p>
                </div>
              )}
              <div className="space-y-4 pt-2">
                <div>
                    <h4 className="font-headline font-semibold text-lg mb-2">Dificuldade de Aprendizado</h4>
                    <div className="flex items-center gap-4">
                        <Progress value={difficulty * 10} className="w-[85%]" indicatorClassName="transition-all duration-500" style={{'--progress-indicator-color': difficultyColor} as React.CSSProperties} />
                        <span className="font-mono text-lg font-semibold">{difficulty.toFixed(1)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5">Ranking de 0 (fácil) a 10 (difícil)</p>
                </div>
                <div>
                    <h4 className="font-headline font-semibold text-lg mb-2">Popularidade</h4>
                    <div className="flex items-center gap-4">
                        <Progress value={popularity * 10} className="w-[85%]" indicatorClassName="transition-all duration-500" style={{'--progress-indicator-color': popularityColor} as React.CSSProperties} />
                        <span className="font-mono text-lg font-semibold">{popularity.toFixed(1)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5">Ranking de 0 (nicho) a 10 (mainstream)</p>
                </div>
              </div>
              <TechChat techName={name} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
