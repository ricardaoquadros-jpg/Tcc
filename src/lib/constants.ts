import {
  AngularIcon,
  Css3Icon,
  Html5Icon,
  JavaIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  SvelteIcon,
  VueIcon,
  TypescriptIcon,
  JavascriptIcon,
  NextjsIcon,
  ViteIcon,
  TailwindIcon,
  BootstrapIcon,
  JqueryIcon,
  JestIcon,
  CypressIcon,
  StorybookIcon,
  ReduxIcon,
  GraphqlIcon,
  WebpackIcon,
  BabelIcon,
  GatsbyIcon,
  EmberIcon,
  SassIcon,
  LessIcon,
  PlaywrightIcon,
  ThreejsIcon,
  ElmIcon,
  PreactIcon,
  AlpineIcon,
  LitIcon,
  SolidIcon,
  DartIcon,
  CoffeescriptIcon,
  PurescriptIcon,
  ReasonMLIcon,
  StimulusIcon,
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
    description:
      'Uma biblioteca JavaScript para construir interfaces de usuário ricas e interativas.',
  },
  {
    name: 'Vue.js',
    icon: VueIcon,
    description:
      'Um framework progressivo, conhecido por sua simplicidade e excelente documentação.',
  },
  {
    name: 'Angular',
    icon: AngularIcon,
    description:
      'Uma plataforma robusta do Google para construir aplicações web complexas e em larga escala.',
  },
  {
    name: 'Svelte',
    icon: SvelteIcon,
    description:
      'Um compilador que transforma seu código em JavaScript vanilla, resultando em apps mais rápidos.',
  },
  {
    name: 'HTML5',
    icon: Html5Icon,
    description:
      'A linguagem de marcação padrão para criar páginas da web e aplicações web.',
  },
  {
    name: 'CSS3',
    icon: Css3Icon,
    description:
      'A linguagem de folha de estilo usada para descrever a apresentação de um documento escrito em HTML.',
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
    description:
      'Um superconjunto de JavaScript que adiciona tipagem estática opcional.',
  },
  {
    name: 'JavaScript',
    icon: JavascriptIcon,
    description:
      'A linguagem de programação fundamental da web, executada no navegador do cliente.',
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
    description:
      'Um framework React para produção, com renderização estática e no lado do servidor.',
  },
  {
    name: 'Vite',
    icon: ViteIcon,
    description:
      'Uma ferramenta de build moderna que oferece um desenvolvimento mais rápido e ágil.',
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindIcon,
    description:
      'Um framework CSS "utility-first" para criar designs customizados rapidamente.',
  },
  {
    name: 'Bootstrap',
    icon: BootstrapIcon,
    description:
      'Framework popular para desenvolver sites responsivos e mobile-first.',
  },
  {
    name: 'jQuery',
    icon: JqueryIcon,
    description:
      'Uma biblioteca JavaScript clássica que simplifica a manipulação de HTML e eventos.',
  },
  {
    name: 'Jest',
    icon: JestIcon,
    description: 'Um framework de teste de JavaScript com foco na simplicidade.',
  },
  {
    name: 'Cypress',
    icon: CypressIcon,
    description:
      'Ferramenta de teste de ponta a ponta para tudo que roda em um navegador.',
  },
  {
    name: 'Storybook',
    icon: StorybookIcon,
    description:
      'Uma ferramenta para desenvolver componentes de UI de forma isolada e organizada.',
  },
  {
    name: 'Redux',
    icon: ReduxIcon,
    description:
      'Uma biblioteca previsível para gerenciamento de estado em aplicações JavaScript.',
  },
  {
    name: 'GraphQL',
    icon: GraphqlIcon,
    description:
      'Uma linguagem de consulta para APIs que permite aos clientes pedir exatamente o que precisam.',
  },
  {
    name: 'Webpack',
    icon: WebpackIcon,
    description:
      'Um empacotador de módulos estáticos para aplicações JavaScript modernas.',
  },
  {
    name: 'Babel',
    icon: BabelIcon,
    description:
      'Um compilador JavaScript que permite usar as versões mais recentes da linguagem.',
  },
  {
    name: 'Gatsby',
    icon: GatsbyIcon,
    description:
      'Um framework baseado em React para criar sites e aplicativos rápidos e otimizados.',
  },
  {
    name: 'Ember.js',
    icon: EmberIcon,
    description:
      'Um framework JavaScript opinativo para a criação de aplicações web ambiciosas.',
  },
  {
    name: 'Sass',
    icon: SassIcon,
    description:
      'Um pré-processador CSS que adiciona recursos como variáveis, aninhamento e mixins.',
  },
  {
    name: 'Less',
    icon: LessIcon,
    description:
      'Outro pré-processador CSS popular que estende a funcionalidade do CSS.',
  },
  {
    name: 'Playwright',
    icon: PlaywrightIcon,
    description:
      'Framework de teste de ponta a ponta da Microsoft para automação web confiável.',
  },
  {
    name: 'Three.js',
    icon: ThreejsIcon,
    description:
      'Uma biblioteca 3D para JavaScript que facilita a criação de gráficos e animações na web.',
  },
  {
    name: 'Elm',
    icon: ElmIcon,
    description:
      'Uma linguagem funcional que compila para JavaScript, focada em confiabilidade e sem erros em tempo de execução.',
  },
  {
    name: 'Preact',
    icon: PreactIcon,
    description:
      'Uma alternativa rápida e leve ao React, com a mesma API moderna e apenas 3kB de tamanho.',
  },
  {
    name: 'Alpine.js',
    icon: AlpineIcon,
    description:
      'Um framework JavaScript minimalista para compor comportamento reativo diretamente no seu HTML.',
  },
  {
    name: 'Lit',
    icon: LitIcon,
    description:
      'Uma biblioteca simples para construir componentes web rápidos e leves que funcionam em qualquer framework.',
  },
  {
    name: 'SolidJS',
    icon: SolidIcon,
    description:
      'Um framework declarativo para construir interfaces de usuário que compila para JavaScript otimizado e reativo.',
  },
  {
    name: 'Dart',
    icon: DartIcon,
    description:
      'Uma linguagem otimizada para o cliente para construir rapidamente apps em qualquer plataforma (Mobile, Web, Desktop).',
  },
  {
    name: 'CoffeeScript',
    icon: CoffeescriptIcon,
    description:
      'Uma linguagem que compila para JavaScript, adicionando açúcar sintático inspirado em Ruby e Python.',
  },
  {
    name: 'PureScript',
    icon: PurescriptIcon,
    description:
      'Uma linguagem fortemente tipada e puramente funcional que compila para JavaScript legível.',
  },
  {
    name: 'ReasonML',
    icon: ReasonMLIcon,
    description:
      'Uma sintaxe amigável para a linguagem OCaml, criada pelo Facebook para ser robusta e segura.',
  },
  {
    name: 'Stimulus',
    icon: StimulusIcon,
    description:
      'Um framework JavaScript modesto para dar vida ao HTML, conectando elementos a objetos JavaScript.',
  },
];

export const backendTechnologies: Technology[] = [
  {
    name: 'Node.js',
    icon: NodeIcon,
    description:
      'Permite executar JavaScript no servidor, ideal para aplicações rápidas e escaláveis.',
  },
  {
    name: 'Python',
    icon: PythonIcon,
    description:
      'Versátil e com frameworks poderosos como Django e Flask, ótimo para IA e ciência de dados.',
  },
  {
    name: 'Java',
    icon: JavaIcon,
    description:
      'Linguagem robusta e segura, muito usada em sistemas corporativos com o framework Spring.',
  },
  {
    name: 'Rust',
    icon: RustIcon,
    description:
      'Focado em performance e segurança de memória, ideal para sistemas de alto desempenho.',
  },
];
