import {
  AngularIcon,
  JavaIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  SvelteIcon,
  VueIcon,
} from '@/components/icons';
import type { ComponentType } from 'react';

export interface Technology {
  name: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

export const frontendTechnologies: Technology[] = [
  {
    name: 'React',
    icon: ReactIcon,
    description: 'Uma biblioteca JavaScript para construir interfaces de usuário ricas e interativas.',
  },
  {
    name: 'Vue.js',
    icon: VueIcon,
    description: 'Um framework progressivo, conhecido por sua simplicidade e excelente documentação.',
  },
  {
    name: 'Angular',
    icon: AngularIcon,
    description: 'Uma plataforma robusta do Google para construir aplicações web complexas e em larga escala.',
  },
  {
    name: 'Svelte',
    icon: SvelteIcon,
    description: 'Um compilador que transforma seu código em JavaScript vanilla, resultando em apps mais rápidos.',
  },
];

export const backendTechnologies: Technology[] = [
  {
    name: 'Node.js',
    icon: NodeIcon,
    description: 'Permite executar JavaScript no servidor, ideal para aplicações rápidas e escaláveis.',
  },
  {
    name: 'Python',
    icon: PythonIcon,
    description: 'Versátil e com frameworks poderosos como Django e Flask, ótimo para IA e ciência de dados.',
  },
  {
    name: 'Java',
    icon: JavaIcon,
    description: 'Linguagem robusta e segura, muito usada em sistemas corporativos com o framework Spring.',
  },
  {
    name: 'Rust',
    icon: RustIcon,
    description: 'Focado em performance e segurança de memória, ideal para sistemas de alto desempenho.',
  },
];
