
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
  MicrosoftIcon,
  WikipediaIcon,
  WordPressIcon,
  RedditIcon,
  TikTokIcon,
  ZoomIcon,
  SalesforceIcon,
  EbayIcon,
  StripeIcon,
  PaypalIcon,
  CanvaIcon,
  DropboxIcon,
  NotionIcon,
} from '@/components/icons';
import type { ComponentType, SVGProps } from 'react';

type AppTechnology = {
  tech: Technology;
  area: 'Frontend' | 'Backend';
};

export interface Application {
  name: string;
  logo: string | ComponentType<SVGProps<SVGSVGElement>>;
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
    logo: 'https://i.imgur.com/k0aHIPV.png',
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
    logo: 'https://i.imgur.com/xSoDTYn.png',
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
    logo: 'https://i.imgur.com/ko4TgwK.png',
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
    logo: 'https://i.imgur.com/6HFetXC.png',
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
    logo: 'https://i.imgur.com/CeqDbf6.png',
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
    logo: 'https://i.imgur.com/Q32Ubog.png',
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
    logo: 'https://i.imgur.com/vJ8jpLJ.png',
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
    logo: 'https://i.imgur.com/UIwvlFN.png',
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
    logo: 'https://i.imgur.com/zgMUfDy.png',
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
    logo: 'https://i.imgur.com/alELPWx.png',
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
    logo: 'https://i.imgur.com/ZuGVuqk.png',
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
    logo: 'https://i.imgur.com/rz3WA5w.png',
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
    logo: 'https://i.imgur.com/T0RCOaD.png',
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
    logo: 'https://i.imgur.com/qOE40wJ.png',
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
    logo: 'https://i.imgur.com/ExxCxjA.png',
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
    logo: 'https://i.imgur.com/v92cIYr.png',
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
    logo: 'https://i.imgur.com/rq73HzO.png',
    description: 'Ferramenta de gerenciamento de projetos no estilo Kanban.',
    technologies: getTechs(
      getTech('Backbone.js', 'Frontend'),
      getTech('Node.js', 'Backend'),
      getTech('MongoDB', 'Backend')
    ),
  },
  {
    name: 'GitHub',
    logo: 'https://i.imgur.com/IkCnM7d.png',
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
    logo: 'https://i.imgur.com/HHjxCZM.png',
    description: 'Ferramenta líder para rastreamento de bugs e gerenciamento de projetos ágeis.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('Kotlin', 'Backend'),
      getTech('PostgreSQL', 'Backend')
    ),
  },
  {
    name: 'Microsoft',
    logo: 'https://i.imgur.com/yjcOr8r.png',
    description: 'Gigante global de software, criadora do Windows e Office.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('TypeScript', 'Frontend'),
      getTech('C#', 'Backend'),
      getTech('ASP.NET Core', 'Backend'),
      getTech('SQL Server', 'Backend')
    ),
  },
  {
    name: 'Wikipedia',
    logo: 'https://i.imgur.com/SpWcbZ6.png',
    description: 'A maior enciclopédia online livre e colaborativa do mundo.',
    technologies: getTechs(
      getTech('JavaScript', 'Frontend'),
      getTech('PHP', 'Backend'),
      getTech('MySQL', 'Backend')
    ),
  },
  {
    name: 'WordPress',
    logo: 'https://i.imgur.com/oz0hUTm.png',
    description: 'O sistema de gerenciamento de conteúdo (CMS) mais popular do mundo.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('JavaScript', 'Frontend'),
      getTech('PHP', 'Backend'),
      getTech('MySQL', 'Backend')
    ),
  },
  {
    name: 'Reddit',
    logo: 'https://i.imgur.com/0trrrwz.png',
    description: 'Uma vasta rede de comunidades baseadas nos interesses das pessoas.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Python', 'Backend'),
      getTech('Go', 'Backend'),
      getTech('PostgreSQL', 'Backend'),
      getTech('Cassandra', 'Backend')
    ),
  },
  {
    name: 'TikTok',
    logo: 'https://i.imgur.com/riITNIV.png',
    description: 'Plataforma de vídeos curtos que se tornou um fenômeno global.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Next.js', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('Go', 'Backend'),
      getTech('Python', 'Backend')
    ),
  },
  {
    name: 'Zoom',
    logo: 'https://i.imgur.com/6oI2kpp.png',
    description: 'Plataforma líder de videoconferência e comunicação por vídeo.',
    technologies: getTechs(
      getTech('Angular', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('C#', 'Backend'),
      getTech('MySQL', 'Backend')
    ),
  },
  {
    name: 'Salesforce',
    logo: 'https://picsum.photos/seed/salesforce/100/100',
    description: 'Plataforma de CRM nº 1 do mundo para vendas, serviços e marketing.',
    technologies: getTechs(
      getTech('JavaScript', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('Oracle DB', 'Backend'),
      getTech('PostgreSQL', 'Backend')
    ),
  },
  {
    name: 'eBay',
    logo: 'https://picsum.photos/seed/ebay/100/100',
    description: 'Um dos maiores mercados online do mundo para leilões e vendas.',
    technologies: getTechs(
      getTech('JavaScript', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('Node.js', 'Backend'),
      getTech('Oracle DB', 'Backend')
    ),
  },
  {
    name: 'Stripe',
    logo: 'https://picsum.photos/seed/stripe/100/100',
    description: 'Plataforma de processamento de pagamentos para negócios online.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Ruby', 'Backend'),
      getTech('Go', 'Backend'),
      getTech('Scala', 'Backend'),
      getTech('MongoDB', 'Backend')
    ),
  },
  {
    name: 'PayPal',
    logo: 'https://picsum.photos/seed/paypal/100/100',
    description: 'Sistema de pagamento online que atua como alternativa aos métodos tradicionais.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Node.js', 'Backend'),
      getTech('Java', 'Backend'),
      getTech('Python', 'Backend'),
      getTech('MySQL', 'Backend')
    ),
  },
  {
    name: 'Instagram',
    logo: 'https://i.imgur.com/ko4TgwK.png',
    description: 'Rede social de compartilhamento de fotos e vídeos.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Python', 'Backend'),
      getTech('Django', 'Backend'),
      getTech('PostgreSQL', 'Backend')
    ),
  },
  {
    name: 'WhatsApp',
    logo: 'https://i.imgur.com/ko4TgwK.png',
    description: 'Aplicativo de mensagens instantâneas para smartphones.',
    technologies: getTechs(
      getTech('JavaScript', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('Elixir', 'Backend'),
      getTech('PostgreSQL', 'Backend')
    ),
  },
  {
    name: 'YouTube',
    logo: 'https://i.imgur.com/xSoDTYn.png',
    description: 'A maior plataforma de compartilhamento de vídeos do mundo.',
    technologies: getTechs(
      getTech('JavaScript', 'Frontend'),
      getTech('Go', 'Backend'),
      getTech('Python', 'Backend'),
      getTech('MySQL', 'Backend')
    ),
  },
  {
    name: 'Google Maps',
    logo: 'https://i.imgur.com/xSoDTYn.png',
    description: 'Serviço de pesquisa e visualização de mapas e imagens de satélite.',
    technologies: getTechs(
      getTech('JavaScript', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('Python', 'Backend'),
      getTech('C#', 'Backend')
    ),
  },
  {
    name: 'Amazon Web Services',
    logo: 'https://i.imgur.com/6HFetXC.png',
    description: 'Plataforma de serviços de computação em nuvem, segura e sob demanda.',
    technologies: getTechs(
      getTech('Angular', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('Go', 'Backend'),
      getTech('Rust', 'Backend')
    ),
  },
  {
    name: 'Microsoft Office 365',
    logo: 'https://i.imgur.com/yjcOr8r.png',
    description: 'Conjunto de aplicativos de produtividade em nuvem, como Word e Excel.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('C#', 'Backend'),
      getTech('ASP.NET Core', 'Backend'),
      getTech('SQL Server', 'Backend')
    ),
  },
  {
    name: 'Facebook Messenger',
    logo: 'https://i.imgur.com/ko4TgwK.png',
    description: 'Serviço de mensagens instantâneas integrado ao Facebook.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('JavaScript', 'Frontend'),
      getTech('PHP', 'Backend'),
      getTech('Java', 'Backend')
    ),
  },
  {
    name: 'Canva',
    logo: 'https://picsum.photos/seed/canva/100/100',
    description: 'Plataforma de design gráfico que permite aos usuários criar gráficos e outros conteúdos visuais.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Java', 'Backend'),
      getTech('Node.js', 'Backend'),
      getTech('MySQL', 'Backend')
    ),
  },
  {
    name: 'Dropbox',
    logo: 'https://picsum.photos/seed/dropbox/100/100',
    description: 'Serviço de armazenamento de arquivos em nuvem e sincronização.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Go', 'Backend'),
      getTech('Python', 'Backend'),
      getTech('Rust', 'Backend'),
      getTech('MySQL', 'Backend')
    ),
  },
  {
    name: 'Notion',
    logo: 'https://picsum.photos/seed/notion/100/100',
    description: 'Aplicativo de produtividade que oferece um espaço de trabalho tudo-em-um.',
    technologies: getTechs(
      getTech('React', 'Frontend'),
      getTech('Node.js', 'Backend'),
      getTech('PostgreSQL', 'Backend')
    ),
  }
];

    

    

    

    


    

    

    
