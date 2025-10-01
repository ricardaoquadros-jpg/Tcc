
import {
  allTechNames,
  backendTechnologies,
  findTechnology,
  frontendTechnologies,
  type Technology,
} from './constants';
import {
  AppleLogo,
  GoogleLogo,
  MetaLogo,
  NetflixLogo,
  AmazonLogo,
} from '@/components/icons';
import type { ComponentType, SVGProps } from 'react';

type Company = {
  name: string;
  logo: string | ComponentType<SVGProps<SVGSVGElement>>;
  technologies: Technology[];
};

export interface JobRole {
  title: string;
  area: 'Frontend' | 'Backend';
  description: string;
  salary: {
    min: number;
    max: number;
    source: string;
    sourceUrl: string;
  };
  responsibilities: string[];
  companies: Company[];
}

function getTechs(...names: (typeof allTechNames)[number][]): Technology[] {
  return names.map(name => findTechnology(name)).filter(Boolean) as Technology[];
}

export const jobRoles: JobRole[] = [
  {
    title: 'Engenheiro(a) de Frontend',
    area: 'Frontend',
    description:
      'Cria a interface visual e interativa de sites e aplicações, focando na experiência do usuário (UX) e na usabilidade (UI).',
    salary: {
      min: 7000,
      max: 12000,
      source: 'Glassdoor',
      sourceUrl: 'https://www.glassdoor.com.br/Sal%C3%A1rios/engenheiro-frontend-sal%C3%A1rio-SRCH_KO0,20.htm',
    },
    responsibilities: [
      'Desenvolver interfaces com HTML, CSS e JavaScript/TypeScript.',
      'Utilizar frameworks como React, Vue ou Angular.',
      'Garantir a responsividade da aplicação em diferentes dispositivos.',
      'Otimizar a performance de carregamento do site.',
      'Colaborar com designers para implementar layouts.',
    ],
    companies: [
      {
        name: 'Meta',
        logo: 'https://i.imgur.com/ko4TgwK.png',
        technologies: getTechs('React', 'JavaScript', 'GraphQL', 'Jest'),
      },
      {
        name: 'Google',
        logo: 'https://i.imgur.com/xSoDTYn.png',
        technologies: getTechs('Angular', 'TypeScript', 'Dart', 'Firebase'),
      },
      {
        name: 'Netflix',
        logo: 'https://i.imgur.com/k0aHIPV.png',
        technologies: getTechs('React', 'TypeScript', 'Redux', 'GraphQL'),
      },
    ],
  },
  {
    title: 'Engenheiro(a) de Backend',
    area: 'Backend',
    description:
      'Constrói e mantém a lógica, os bancos de dados e as APIs que alimentam a aplicação por trás dos panos.',
    salary: {
      min: 8000,
      max: 15000,
      source: 'Glassdoor',
      sourceUrl: 'https://www.glassdoor.com.br/Sal%C3%A1rios/engenheiro-backend-sal%C3%A1rio-SRCH_KO0,19.htm',
    },
    responsibilities: [
      'Desenvolver APIs RESTful ou GraphQL.',
      'Gerenciar bancos de dados (SQL e NoSQL).',
      'Implementar a lógica de negócios e regras do sistema.',
      'Garantir a segurança e a escalabilidade da aplicação.',
      'Configurar e gerenciar a infraestrutura e o deploy.',
    ],
    companies: [
      {
        name: 'Amazon',
        logo: 'https://picsum.photos/seed/amazon/100/100',
        technologies: getTechs('Java', 'Spring Boot', 'PostgreSQL', 'Docker'),
      },
      {
        name: 'Google',
        logo: 'https://i.imgur.com/xSoDTYn.png',
        technologies: getTechs('Go', 'Python', 'Kubernetes', 'gRPC'),
      },
      {
        name: 'Apple',
        logo: 'https://picsum.photos/seed/apple/100/100',
        technologies: getTechs('Scala', 'Cassandra', 'Java', 'PostgreSQL'),
      },
    ],
  },
  {
    title: 'Engenheiro(a) Full-Stack',
    area: 'Backend',
    description:
      'Atua tanto no frontend quanto no backend, sendo capaz de construir uma aplicação web completa do início ao fim.',
    salary: {
      min: 9000,
      max: 18000,
      source: 'Glassdoor',
      sourceUrl: 'https://www.glassdoor.com.br/Sal%C3%A1rios/desenvolvedor-full-stack-sal%C3%A1rio-SRCH_KO0,25.htm',
    },
    responsibilities: [
      'Desenvolver features completas, do banco de dados à UI.',
      'Manter e escalar toda a pilha da aplicação.',
      'Projetar a arquitetura do sistema.',
      'Integrar serviços de terceiros.',
      'Realizar o deploy e monitoramento da aplicação.',
    ],
    companies: [
      {
        name: 'Netflix',
        logo: 'https://i.imgur.com/k0aHIPV.png',
        technologies: getTechs('Node.js', 'React', 'Java', 'GraphQL'),
      },
      {
        name: 'Amazon',
        logo: 'https://picsum.photos/seed/amazon/100/100',
        technologies: getTechs('React', 'Java', 'Spring Boot', 'Docker'),
      },
      {
        name: 'Meta',
        logo: 'https://i.imgur.com/ko4TgwK.png',
        technologies: getTechs('React', 'PHP', 'Python', 'MySQL'),
      },
    ],
  },
];

    

    
