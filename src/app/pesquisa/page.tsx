"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from 'recharts';
import { FilePieChart, Lightbulb, MessageSquare } from 'lucide-react';
import { FXBLogo } from '@/components/icons/fxb-logo';

const surveyData = {
  totalResponses: 24,
  experienceLevel: [
    { name: "Já atua/estuda na área", value: 15 },
    { name: "Ainda não atua na área", value: 9 },
  ],
  frontendTechs: [
    { name: 'HTML', value: 23 },
    { name: 'CSS', value: 22 },
    { name: 'JavaScript', value: 20 },
    { name: 'React', value: 11 },
    { name: 'TypeScript', value: 8 },
    { name: 'Python', value: 8 },
    { name: 'Node.js', value: 7 },
    { name: 'Vue.js', value: 6 },
    { name: 'Angular', value: 6 },
    { name: 'PHP', value: 4 },
    { name: 'MySQL', value: 2 },
    { name: 'Java', value: 2 },
    { name: 'Svelte', value: 1 },
  ],
  backendTechs: [
    { name: 'Python', value: 19 },
    { name: 'JavaScript', value: 16 },
    { name: 'PHP', value: 12 },
    { name: 'MySQL', value: 10 },
    { name: 'Node.js', value: 7 },
    { name: 'React', value: 1 },
  ],
  employability: [
      { name: 'Frontend', 'Nota Média': 3.42 },
      { name: 'Backend', 'Nota Média': 3.58 },
      { name: 'Full-Stack', 'Nota Média': 3.86 },
  ],
  specializationGoals: [
    "Frontend do Pornhub",
    "Computação em nuvem e devops",
    "Backend",
    "",
    "",
    "Não é exatamente o que eu vou me especializar, mas o mercado de trabalhado na indústria de TI está, no momento, a procura de profissionais que sabem trabalhar com machine learning e deep learning.",
    "Operação de máquinas, pois não compactuo com a ideia de ser um vagabundo que fica parado na frente do pc o dia inteiro.",
    "Na parte de hardware. Por que é a parte mais divertida da tecnologia pra mim.",
    "Redes de Computadores",
    "Programação backend, por conta dos altos salários e alta procura no mercado.",
    "I.A.",
    "IA",
    "Pretendo me especializar como suporte L3, porque gosto de atendimento ao cliente, mas também encontrar bugs e resolver logs.",
    "BackEnd por questões pessoais de preferir mexer com banco de dados e modelar como os sistemas devem funcionar, ao invés de fazer o seu design.",
    "Tenho interesse em me especializar na área de inteligência artificial e aprendizado de máquina, porque acredito que essas tecnologias estão transformando praticamente todos os setores da sociedade. ",
    "Cybersegurança",
    "FullStack. Gosto de aprender de tudo e mesmo que tenha dificuldade em um ou outro, irei aprender ",
    "BackEnd",
    "Ainda não sei, só estou nessa área pelo dinheiro e pela minha família.",
    "Desenvolvimento de Jogos, pois é o meu sonho atualmente.",
    "",
    "Backend - gosto muito dos códigos e resolução de problemas.",
    "Não pretendo ",
    "Mais no backend/infraestrutura e engenharia, pra poder atuar em projetos maiores e poder abranger mais áreas."
  ]
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

  const validSpecializationGoals = surveyData.specializationGoals.filter(goal => goal && goal.trim() !== '');

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
                    Dashboard com os dados coletados através do formulário de pesquisa.
                </p>
                <p className="mt-2 text-sm text-foreground">Total de Respostas: <span className='font-bold'>{surveyData.totalResponses}</span></p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Nível de Experiência</CardTitle>
                        <CardDescription>Distribuição dos participantes por experiência.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie data={surveyData.experienceLevel} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                                    {surveyData.experienceLevel.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => `${value} (${((Number(value) / surveyData.totalResponses) * 100).toFixed(1)}%)`}/>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Percepção de Empregabilidade</CardTitle>
                        <CardDescription>Nota média de empregabilidade (1-5).</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={surveyData.employability}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis domain={[0, 5]} fontSize={12} />
                                <Tooltip formatter={(value) => `${Number(value).toFixed(2)}`}/>
                                <Legend />
                                <Bar dataKey="Nota Média" fill="hsl(var(--primary))" name="Nota Média" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                 <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Tecnologias Associadas ao Frontend</CardTitle>
                        <CardDescription>Quais tecnologias os participantes associaram ao desenvolvimento Frontend.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={surveyData.frontendTechs} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" fontSize={12} />
                                <YAxis type="category" dataKey="name" width={80} fontSize={12} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="hsl(var(--frontend))" name="Votos" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                
                 <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Tecnologias Associadas ao Backend</CardTitle>
                        <CardDescription>Quais tecnologias os participantes associaram ao desenvolvimento Backend.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={surveyData.backendTechs} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" fontSize={12} />
                                <YAxis type="category" dataKey="name" width={80} fontSize={12} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="hsl(var(--backend))" name="Votos" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <div className="lg:col-span-2 mt-8">
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center gap-3">
                            <Lightbulb className="h-8 w-8 text-primary" />
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                                Aspirações de Carreira
                            </h2>
                        </div>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Em qual área da tecnologia os participantes pretendem se especializar e por quê?
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {validSpecializationGoals.map((goal, index) => (
                            <Card key={index} className='bg-secondary/50'>
                                <CardContent className="p-4">
                                    <div className="flex items-start gap-3">
                                        <MessageSquare className="h-5 w-5 mt-1 flex-shrink-0 text-primary/80" />
                                        <p className="text-sm text-foreground/90">{goal}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

          </div>
        </main>
      </div>
    )
  );
}
