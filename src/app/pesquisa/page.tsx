
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from 'recharts';
import { FilePieChart } from 'lucide-react';
import { FXBLogo } from '@/components/icons/fxb-logo';

// Mock data simulating survey results
const surveyData = {
  totalResponses: 150,
  experienceLevel: [
    { name: 'Iniciante (0-1 ano)', value: 45 },
    { name: 'Júnior (1-3 anos)', value: 60 },
    { name: 'Pleno (3-6 anos)', value: 30 },
    { name: 'Sênior (6+ anos)', value: 15 },
  ],
  areaOfInterest: [
    { name: 'Frontend', value: 70 },
    { name: 'Backend', value: 55 },
    { name: 'Full-Stack', value: 25 },
  ],
  technologiesOfInterest: [
    { name: 'React', value: 85 },
    { name: 'Node.js', value: 75 },
    { name: 'Python', value: 65 },
    { name: 'Vue.js', value: 40 },
    { name: 'Java', value: 35 },
    { name: 'Angular', value: 30 },
    { name: 'Rust', value: 20 },
  ],
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];

export default function SurveyPage() {
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
          <FXBLogo className="h-16 w-16 animate-pulse text-foreground" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    userName && (
      <div className="flex min-h-screen flex-col">
        <Header userName={userName} isExploring={true} />
        <main className="flex-1">
          <div className="container py-8 md:py-12">
            <div className="mb-10 text-center">
                <div className="inline-flex items-center justify-center gap-3">
                    <FilePieChart className="h-8 w-8 text-primary" />
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                        Resultados da Pesquisa
                    </h1>
                </div>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Dashboard com os dados coletados através do formulário. (Dados de exemplo)
                </p>
                <p className="mt-2 text-sm text-foreground">Total de Respostas: <span className='font-bold'>{surveyData.totalResponses}</span></p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Nível de Experiência</CardTitle>
                        <CardDescription>Distribuição dos participantes por anos de experiência.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={surveyData.experienceLevel}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis fontSize={12} />
                                <Tooltip formatter={(value) => `${value} (${((Number(value) / surveyData.totalResponses) * 100).toFixed(1)}%)`}/>
                                <Bar dataKey="value" fill="hsl(var(--primary))" name="Participantes" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Área de Interesse Principal</CardTitle>
                        <CardDescription>Preferência entre Frontend, Backend e Full-Stack.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie data={surveyData.areaOfInterest} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                                    {surveyData.areaOfInterest.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => `${value} (${((Number(value) / surveyData.totalResponses) * 100).toFixed(1)}%)`}/>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                 <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Interesse em Tecnologias</CardTitle>
                        <CardDescription>Quais tecnologias os participantes mais querem aprender.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={surveyData.technologiesOfInterest} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" fontSize={12} />
                                <YAxis type="category" dataKey="name" width={80} fontSize={12} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="hsl(var(--accent))" name="Votos de Interesse" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

          </div>
        </main>
      </div>
    )
  );
}
