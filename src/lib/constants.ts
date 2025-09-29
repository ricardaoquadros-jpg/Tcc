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
  ClojurescriptIcon,
  FsharpIcon,
  HaxeIcon,
  BackboneIcon,
  KnockoutIcon,
  PolymerIcon,
  AureliaIcon,
  MeteorIcon,
  D3Icon,
  ChartjsIcon,
} from '@/components/icons';
import type { ComponentType } from 'react';

export interface Technology {
  name: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  type: 'Framework' | 'Linguagem' | 'Biblioteca' | 'Ferramenta' | 'Plataforma';
}

export const frontendTechnologies: Technology[] = [
  {
    name: 'React',
    icon: ReactIcon,
    description:
      'Uma biblioteca JavaScript para construir interfaces de usuário ricas e interativas.',
    type: 'Biblioteca',
  },
  {
    name: 'Vue.js',
    icon: VueIcon,
    description:
      'Um framework progressivo, conhecido por sua simplicidade e excelente documentação.',
    type: 'Framework',
  },
  {
    name: 'Angular',
    icon: AngularIcon,
    description:
      'Uma plataforma robusta do Google para construir aplicações web complexas e em larga escala.',
    type: 'Plataforma',
  },
  {
    name: 'Svelte',
    icon: SvelteIcon,
    description:
      'Um compilador que transforma seu código em JavaScript vanilla, resultando em apps mais rápidos.',
    type: 'Framework',
  },
  {
    name: 'HTML5',
    icon: Html5Icon,
    description:
      'A linguagem de marcação padrão para criar páginas da web e aplicações web.',
    type: 'Linguagem',
  },
  {
    name: 'CSS3',
    icon: Css3Icon,
    description:
      'A linguagem de folha de estilo usada para descrever a apresentação de um documento escrito em HTML.',
    type: 'Linguagem',
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
    description:
      'Um superconjunto de JavaScript que adiciona tipagem estática opcional.',
    type: 'Linguagem',
  },
  {
    name: 'JavaScript',
    icon: JavascriptIcon,
    description:
      'A linguagem de programação fundamental da web, executada no navegador do cliente.',
    type: 'Linguagem',
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
    description:
      'Um framework React para produção, com renderização estática e no lado do servidor.',
    type: 'Framework',
  },
  {
    name: 'Vite',
    icon: ViteIcon,
    description:
      'Uma ferramenta de build moderna que oferece um desenvolvimento mais rápido e ágil.',
    type: 'Ferramenta',
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindIcon,
    description:
      'Um framework CSS "utility-first" para criar designs customizados rapidamente.',
    type: 'Framework',
  },
  {
    name: 'Bootstrap',
    icon: BootstrapIcon,
    description:
      'Framework popular para desenvolver sites responsivos e mobile-first.',
    type: 'Framework',
  },
  {
    name: 'jQuery',
    icon: JqueryIcon,
    description:
      'Uma biblioteca JavaScript clássica que simplifica a manipulação de HTML e eventos.',
    type: 'Biblioteca',
  },
  {
    name: 'Jest',
    icon: JestIcon,
    description: 'Um framework de teste de JavaScript com foco na simplicidade.',
    type: 'Framework',
  },
  {
    name: 'Cypress',
    icon: CypressIcon,
    description:
      'Ferramenta de teste de ponta a ponta para tudo que roda em um navegador.',
    type: 'Ferramenta',
  },
  {
    name: 'Storybook',
    icon: StorybookIcon,
    description:
      'Uma ferramenta para desenvolver componentes de UI de forma isolada e organizada.',
    type: 'Ferramenta',
  },
  {
    name: 'Redux',
    icon: ReduxIcon,
    description:
      'Uma biblioteca previsível para gerenciamento de estado em aplicações JavaScript.',
    type: 'Biblioteca',
  },
  {
    name: 'GraphQL',
    icon: GraphqlIcon,
    description:
      'Uma linguagem de consulta para APIs que permite aos clientes pedir exatamente o que precisam.',
    type: 'Linguagem',
  },
  {
    name: 'Webpack',
    icon: WebpackIcon,
    description:
      'Um empacotador de módulos estáticos para aplicações JavaScript modernas.',
    type: 'Ferramenta',
  },
  {
    name: 'Babel',
    icon: BabelIcon,
    description:
      'Um compilador JavaScript que permite usar as versões mais recentes da linguagem.',
    type: 'Ferramenta',
  },
  {
    name: 'Gatsby',
    icon: GatsbyIcon,
    description:
      'Um framework baseado em React para criar sites e aplicativos rápidos e otimizados.',
    type: 'Framework',
  },
  {
    name: 'Ember.js',
    icon: EmberIcon,
    description:
      'Um framework JavaScript opinativo para a criação de aplicações web ambiciosas.',
    type: 'Framework',
  },
  {
    name: 'Sass',
    icon: SassIcon,
    description:
      'Um pré-processador CSS que adiciona recursos como variáveis, aninhamento e mixins.',
    type: 'Linguagem',
  },
  {
    name: 'Less',
    icon: LessIcon,
    description:
      'Outro pré-processador CSS popular que estende a funcionalidade do CSS.',
    type: 'Linguagem',
  },
  {
    name: 'Playwright',
    icon: PlaywrightIcon,
    description:
      'Framework de teste de ponta a ponta da Microsoft para automação web confiável.',
    type: 'Framework',
  },
  {
    name: 'Three.js',
    icon: ThreejsIcon,
    description:
      'Uma biblioteca 3D para JavaScript que facilita a criação de gráficos e animações na web.',
    type: 'Biblioteca',
  },
  {
    name: 'Elm',
    icon: ElmIcon,
    description:
      'Uma linguagem funcional que compila para JavaScript, focada em confiabilidade e sem erros em tempo de execução.',
    type: 'Linguagem',
  },
  {
    name: 'Preact',
    icon: PreactIcon,
    description:
      'Uma alternativa rápida e leve ao React, com a mesma API moderna e apenas 3kB de tamanho.',
    type: 'Biblioteca',
  },
  {
    name: 'Alpine.js',
    icon: AlpineIcon,
    description:
      'Um framework JavaScript minimalista para compor comportamento reativo diretamente no seu HTML.',
    type: 'Framework',
  },
  {
    name: 'Lit',
    icon: LitIcon,
    description:
      'Uma biblioteca simples para construir componentes web rápidos e leves que funcionam em qualquer framework.',
    type: 'Biblioteca',
  },
  {
    name: 'SolidJS',
    icon: SolidIcon,
    description:
      'Um framework declarativo para construir interfaces de usuário que compila para JavaScript otimizado e reativo.',
    type: 'Framework',
  },
  {
    name: 'Dart',
    icon: DartIcon,
    description:
      'Uma linguagem otimizada para o cliente para construir rapidamente apps em qualquer plataforma (Mobile, Web, Desktop).',
    type: 'Linguagem',
  },
  {
    name: 'CoffeeScript',
    icon: CoffeescriptIcon,
    description:
      'Uma linguagem que compila para JavaScript, adicionando açúcar sintático inspirado em Ruby e Python.',
    type: 'Linguagem',
  },
  {
    name: 'PureScript',
    icon: PurescriptIcon,
    description:
      'Uma linguagem fortemente tipada e puramente funcional que compila para JavaScript legível.',
    type: 'Linguagem',
  },
  {
    name: 'ReasonML',
    icon: ReasonMLIcon,
    description:
      'Uma sintaxe amigável para a linguagem OCaml, criada pelo Facebook para ser robusta e segura.',
    type: 'Linguagem',
  },
  {
    name: 'Stimulus',
    icon: StimulusIcon,
    description:
      'Um framework JavaScript modesto para dar vida ao HTML, conectando elementos a objetos JavaScript.',
    type: 'Framework',
  },
  {
    name: 'ClojureScript',
    icon: ClojurescriptIcon,
    description:
      'Um compilador para Clojure que gera JavaScript, permitindo o uso de uma linguagem Lisp no frontend.',
    type: 'Linguagem',
  },
  {
    name: 'F#',
    icon: FsharpIcon,
    description:
      'Linguagem funcional, de código aberto e multiplataforma que pode compilar para JavaScript usando Fable.',
    type: 'Linguagem',
  },
  {
    name: 'Haxe',
    icon: HaxeIcon,
    description:
      'Uma linguagem de alto nível que pode compilar para JavaScript, C++, Java e outras plataformas.',
    type: 'Linguagem',
  },
  {
    name: 'Backbone.js',
    icon: BackboneIcon,
    description:
      'Fornece estrutura a aplicações web, fornecendo modelos com vinculação de chave-valor e eventos personalizados.',
    type: 'Biblioteca',
  },
  {
    name: 'Knockout.js',
    icon: KnockoutIcon,
    description:
      'Uma biblioteca JavaScript que ajuda a criar interfaces de usuário ricas e responsivas com um modelo de dados subjacente.',
    type: 'Biblioteca',
  },
  {
    name: 'Polymer',
    icon: PolymerIcon,
    description:
      'Uma biblioteca do Google para criar aplicativos usando Web Components.',
    type: 'Biblioteca',
  },
  {
    name: 'Aurelia',
    icon: AureliaIcon,
    description:
      'Um framework de cliente moderno para web, mobile e desktop, escrito com TypeScript.',
    type: 'Framework',
  },
  {
    name: 'Meteor',
    icon: MeteorIcon,
    description:
      'Uma plataforma full-stack em JavaScript para desenvolver aplicações web e móveis em tempo real.',
    type: 'Plataforma',
  },
  {
    name: 'D3.js',
    icon: D3Icon,
    description:
      'Uma biblioteca JavaScript para manipular documentos com base em dados, criando visualizações de dados dinâmicas.',
    type: 'Biblioteca',
  },
  {
    name: 'Chart.js',
    icon: ChartjsIcon,
    description:
      'Biblioteca de gráficos simples, porém flexível, para designers e desenvolvedores.',
    type: 'Biblioteca',
  },
];

export const backendTechnologies: Technology[] = [
  {
    name: 'Node.js',
    icon: NodeIcon,
    description:
      'Permite executar JavaScript no servidor, ideal para aplicações rápidas e escaláveis.',
    type: 'Plataforma',
  },
  {
    name: 'Python',
    icon: PythonIcon,
    description:
      'Versátil e com frameworks poderosos como Django e Flask, ótimo para IA e ciência de dados.',
    type: 'Linguagem',
  },
  {
    name: 'Java',
    icon: JavaIcon,
    description:
      'Linguagem robusta e segura, muito usada em sistemas corporativos com o framework Spring.',
    type: 'Linguagem',
  },
  {
    name: 'Rust',
    icon: RustIcon,
    description:
      'Focado em performance e segurança de memória, ideal para sistemas de alto desempenho.',
    type: 'Linguagem',
  },
];
