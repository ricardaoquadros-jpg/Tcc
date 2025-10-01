import { findTechnology, type Technology } from './constants';
import {
  AppleLogo,
  GoogleLogo,
  MetaLogo,
  NetflixLogo,
  AmazonLogo,
  ShopifyIcon,
  DiscordIcon,
  FigmaIcon,
  SlackIcon,
  TwitchIcon,
  TwitterIcon,
  UberIcon
} from '@/components/icons';

type AppTechnology = {
  tech: Technology;
  area: 'Frontend' | 'Backend';
};

export interface Application {
  name: string;
  logo: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
  technologies: AppTechnology[];
}

function getTech(name: string, area: 'Frontend' | 'Backend'): AppTechnology | null {
  const tech = findTechnology(name);
  if (!tech) return null;
  return { tech, area };
}

function getTechs(...techs: (AppTechnology | null)[]): AppTechnology[] {
    return techs.filter(Boolean) as AppTechnology[];
}

export const applications: Application[] = [
  {
    name: 'Netflix',
    logo: NetflixLogo,
    description: 'Plataforma líder de streaming de filmes e séries.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('TypeScript', 'Frontend'),
      getTech('Node.js', 'Backend'),
      getTech('Java', 'Backend'),
      getTech('Python', 'Backend'),
      getTech('GraphQL', 'Frontend'),
      getTech('Elasticsearch', 'Backend')
    ),
  },
  {
    name: 'Google',
    logo: GoogleLogo,
    description: 'O maior motor de busca do mundo e gigante de tecnologia.',
    technologies: getTechs(
      getTech('Angular', 'Frontend'),
      getTech('TypeScript', 'Frontend'),
      getTech('Go', 'Backend'),
      getTech('Python', 'Backend'),
      getTech('Java', 'Backend'),
      getTech('Kubernetes', 'Backend'),
      getTech('gRPC', 'Backend')
    ),
  },
  {
    name: 'Meta (Facebook)',
    logo: MetaLogo,
    description: 'A maior rede social do mundo e um conglomerado de tecnologia.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('GraphQL', 'Frontend'),
      getTech('PHP', 'Backend'),
      getTech('Python', 'Backend'),
      getTech('Java', 'Backend'),
      getTech('MySQL', 'Backend'),
      getTech('Cassandra', 'Backend')
    ),
  },
  {
    name: 'Amazon',
    logo: AmazonLogo,
    description: 'Líder global em e-commerce, cloud computing e IA.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('Spring Boot', 'Backend'),
      getTech('PostgreSQL', 'Backend'),
      getTech('Docker', 'Backend'),
      getTech('Oracle DB', 'Backend')
    ),
  },
  {
    name: 'Apple',
    logo: AppleLogo,
    description: 'Uma das empresas mais valiosas do mundo, criadora do iPhone.',
    technologies: getTechs(
      getTech('Svelte', 'Frontend'), // Apple Music
      getTech('Scala', 'Backend'),
      getTech('Java', 'Backend'),
      getTech('Cassandra', 'Backend'),
      getTech('PostgreSQL', 'Backend')
    ),
  },
  {
    name: 'Shopify',
    logo: ShopifyIcon,
    description: 'Plataforma de e-commerce que permite a criação de lojas virtuais.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Ruby on Rails', 'Backend'),
      getTech('GraphQL', 'Frontend'),
      getTech('MySQL', 'Backend'),
      getTech('Redis', 'Backend')
    ),
  },
  {
    name: 'Discord',
    logo: DiscordIcon,
    description: 'Plataforma de comunicação por voz, vídeo e texto.',
    technologies: getTechs(
        getTech('React', 'Frontend'),
        getTech('TypeScript', 'Frontend'),
        getTech('Elixir', 'Backend'),
        getTech('Rust', 'Backend'),
        getTech('Python', 'Backend'),
        getTech('Cassandra', 'Backend')
    ),
  },
  {
    name: 'Figma',
    logo: FigmaIcon,
    description: 'Ferramenta de design de interface colaborativa baseada na web.',
    technologies: getTechs(
        getTech('React', 'Frontend'),
        getTech('TypeScript', 'Frontend'),
        getTech('Rust', 'Backend'),
        getTech('Go', 'Backend'),
        getTech('PostgreSQL', 'Backend')
    ),
  },
  {
    name: 'Uber',
    logo: UberIcon,
    description: 'Empresa de transporte que oferece serviços de motorista particular.',
     technologies: getTechs(
        getTech('React', 'Frontend'),
        getTech('Node.js', 'Backend'),
        getTech('Go', 'Backend'),
        getTech('Python', 'Backend'),
        getTech('MySQL', 'Backend'),
        getTech('PostgreSQL', 'Backend'),
        getTech('Redis', 'Backend')
    ),
  }
];
