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
  UberIcon,
  AirbnbIcon,
  AtlassianIcon,
  GithubIcon,
  LinkedinIcon,
  PinterestIcon,
  SpotifyIcon,
  TrelloIcon,
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
  },
  {
    name: 'Slack',
    logo: SlackIcon,
    description: 'Plataforma de mensagens para equipes e colaboração.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('JavaScript', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('PHP', 'Backend'),
      getTech('MySQL', 'Backend')
    ),
  },
  {
    name: 'Twitter (X)',
    logo: TwitterIcon,
    description: 'Rede social para compartilhamento de mensagens curtas.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Scala', 'Backend'),
      getTech('Java', 'Backend'),
      getTech('MySQL', 'Backend'),
      getTech('Redis', 'Backend')
    ),
  },
  {
    name: 'Twitch',
    logo: TwitchIcon,
    description: 'Plataforma de streaming ao vivo, focada em videogames.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Ember.js', 'Frontend'),
      getTech('Go', 'Backend'),
      getTech('PostgreSQL', 'Backend')
    ),
  },
  {
    name: 'Airbnb',
    logo: AirbnbIcon,
    description: 'Mercado online para aluguel de acomodações.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Ruby on Rails', 'Backend'),
      getTech('Java', 'Backend'),
      getTech('MySQL', 'Backend'),
      getTech('Redis', 'Backend')
    ),
  },
  {
    name: 'Pinterest',
    logo: PinterestIcon,
    description: 'Rede social para descoberta visual e compartilhamento de imagens.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Django', 'Backend'),
      getTech('Python', 'Backend'),
      getTech('MySQL', 'Backend')
    ),
  },
  {
    name: 'LinkedIn',
    logo: LinkedinIcon,
    description: 'A maior rede profissional do mundo.',
    technologies: getTechs(
      getTech('Ember.js', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('Scala', 'Backend'),
      getTech('Apache Kafka', 'Backend')
    ),
  },
  {
    name: 'Spotify',
    logo: SpotifyIcon,
    description: 'Serviço de streaming de música, podcasts e vídeos.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Python', 'Backend'),
      getTech('Java', 'Backend'),
      getTech('PostgreSQL', 'Backend'),
      getTech('Cassandra', 'Backend')
    ),
  },
  {
    name: 'Trello',
    logo: TrelloIcon,
    description: 'Ferramenta de gerenciamento de projetos no estilo Kanban.',
    technologies: getTechs(
      getTech('Backbone.js', 'Frontend'),
      getTech('Node.js', 'Backend'),
      getTech('MongoDB', 'Backend')
    ),
  },
  {
    name: 'GitHub',
    logo: GithubIcon,
    description: 'Plataforma de hospedagem de código e colaboração.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Ruby on Rails', 'Backend'),
      getTech('Go', 'Backend'),
      getTech('MySQL', 'Backend')
    ),
  },
  {
    name: 'Atlassian (Jira)',
    logo: AtlassianIcon,
    description: 'Ferramenta líder para rastreamento de bugs e gerenciamento de projetos ágeis.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('Kotlin', 'Backend'),
      getTech('PostgreSQL', 'Backend')
    ),
  }
];
