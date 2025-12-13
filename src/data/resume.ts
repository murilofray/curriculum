export type Language = 'pt' | 'en';

export interface ResumeData {
  personalInfo: {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    whatsapp: string;
  };
  summary: {
    pt: string;
    en: string;
  };
  experience: {
    company: string;
    role: { pt: string; en: string };
    period: { pt: string; en: string };
    description: { pt: string; en: string };
    link?: string;
    image?: string;
  }[];
  education: {
    institution: string;
    degree: { pt: string; en: string };
    period: { pt: string; en: string };
  }[];
  skills: {
    category: { pt: string; en: string };
    items: string[];
  }[];
  projects: {
    title: { pt: string; en: string };
    description: { pt: string; en: string };
    tech: string[];
    link?: string;
    image?: string;
    highlight?: boolean;
  }[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Murilo Lopes Fray de Oliveira",
    role: "Backend Developer | AI Engineer | Azure | LangChain | LangGraph | RAG | Python",
    location: "Presidente Epitácio, São Paulo, Brasil",
    email: "murilofray01@gmail.com",
    phone: "+55 18 98806-6751",
    whatsapp: "5518988066751",
    linkedin: "https://www.linkedin.com/in/murilofray/",
    github: "https://github.com/murilofray",
  },
  summary: {
    pt: "Desenvolvedor Backend especializado em IA, atuo como Consultor em Desenvolvimento na OiKO.ai, utilizando metodologia Scrum, enquanto finalizo Ciência da Computação no IFSP. Construo APIs e integrações com LLMs usando Python, C#, LangChain e LangGraph, orquestrando dados em bancos relacionais, NoSQL, vetoriais e de grafos. Tenho experiência prática em projetos de RAG, agentes autônomos e deploy em Azure. Meu foco é evoluir para arquiteto de sistemas, unindo excelência em backend a soluções inteligentes.",
    en: "Backend Developer specialized in AI, working as a Development Consultant at OiKO.ai using Scrum methodology, while completing Computer Science at IFSP. I build APIs and LLM integrations using Python, C#, LangChain, and LangGraph, orchestrating data across relational, NoSQL, vector, and graph databases. I have hands-on experience in RAG projects, autonomous agents, and Azure deployment. My focus is to evolve into a systems architect, combining backend excellence with intelligent solutions."
  },
  experience: [
    {
      company: "OiKO.ai",
      role: { pt: "Consultor em Desenvolvimento", en: "Development Consultant" },
      period: { pt: "Jun 2024 - Presente", en: "Jun 2024 - Present" },
      description: {
        pt: "Desenvolvimento de soluções empresariais com IA generativa, incluindo sistemas de contabilidade inteligente, plataformas jurídicas automatizadas, ferramentas para homebuilders (construtoras) e sistemas de gestão de RH. Responsável pela arquitetura de back-end com FastAPI, desenvolvimento de interfaces com Next.js 14, implementação de agentes autônomos usando LangGraph e CrewAI, e deploy em Azure (Web Apps, Static Web Apps e Container Apps). Trabalho com integração de LLMs, RAG (Retrieval-Augmented Generation) e bancos vetoriais para criar experiências contextualizadas.",
        en: "Development of enterprise solutions with generative AI, including intelligent accounting systems, automated legal platforms, tools for homebuilders, and HR management systems. Responsible for back-end architecture with FastAPI, interface development with Next.js 14, implementation of autonomous agents using LangGraph and CrewAI, and deployment on Azure (Web Apps, Static Web Apps, and Container Apps). Working with LLM integration, RAG (Retrieval-Augmented Generation), and vector databases to create contextualized experiences."
      }
    },
    {
      company: "IFSP - Secretaria da Educação de Presidente Epitácio",
      role: { pt: "Desenvolvedor Full Stack | Scrum Master | Tech Lead", en: "Full Stack Developer | Scrum Master | Tech Lead" },
      period: { pt: "Ago 2024 - Nov 2024", en: "Aug 2024 - Nov 2024" },
      description: {
        pt: "Desenvolvimento em equipe de 3 pessoas do módulo de Gestão de Docentes para um sistema completo de automação da rede municipal de ensino. Atuei simultaneamente como Scrum Master (organizando sprints e facilitando comunicação), Tech Lead (definindo arquitetura e stack tecnológico) e DevOps (configurando infraestrutura Azure). O sistema automatiza cálculos complexos de pontuação para atribuição de aulas, controla progressão de carreira, registra faltas e gerencia quinquênios, além de gerar relatórios automáticos. Stack: Node.js (back-end), Angular (front-end), MySQL (banco de dados), Azure Database for MySQL Flexible Server e Azure Web Apps.",
        en: "Development in a team of 3 people of the Teacher Management module for a complete automation system of the municipal education network. Acted simultaneously as Scrum Master (organizing sprints and facilitating communication), Tech Lead (defining architecture and tech stack), and DevOps (configuring Azure infrastructure). The system automates complex scoring calculations for class assignments, controls career progression, records absences, and manages quinquennial periods, in addition to generating automatic reports. Stack: Node.js (back-end), Angular (front-end), MySQL (database), Azure Database for MySQL Flexible Server, and Azure Web Apps."
      },
      link: "https://www.presidenteepitacio.sp.gov.br/portal/noticias/0/3/3226/academicos-do-ifsp-apresentam-software-desenvolvido-para-a-secretaria-de-educacao-de-presidente-epitacio",
      image: "/foto_secretaria.png"
    },
    {
      company: "IFSP - Sistema GRED",
      role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
      period: { pt: "Fev 2024 - Jun 2024", en: "Feb 2024 - Jun 2024" },
      description: {
        pt: "Manutenção e evolução do Sistema GRED (Gerenciamento do Regime de Exercícios Domiciliares), plataforma interna do IFSP-PEP para automatizar processos de concessão e acompanhamento do regime domiciliar de estudantes, em conformidade com o Decreto-lei n° 1.044/1969. Trabalhei em equipe de 3 desenvolvedores usando metodologia Scrum, implementando melhorias, correções de bugs e novas funcionalidades. Stack: Node.js, Angular, MySQL.",
        en: "Maintenance and evolution of the GRED System (Home Exercise Regime Management), an internal IFSP-PEP platform to automate processes for granting and monitoring students' home study regime, in compliance with Decree-Law No. 1,044/1969. Worked in a team of 3 developers using Scrum methodology, implementing improvements, bug fixes, and new features. Stack: Node.js, Angular, MySQL."
      }
    },
    {
      company: "IFSP",
      role: { pt: "Monitor de Estrutura de Dados", en: "Data Structures Teaching Assistant" },
      period: { pt: "Mar 2023 - Nov 2023", en: "Mar 2023 - Nov 2023" },
      description: {
        pt: "Monitor bolsista com carga horária de 20h semanais. Participação em aulas regulares e ministração de aulas de reforço para esclarecimento de dúvidas. Ensino de conceitos fundamentais de lógica de programação em C, estruturas de dados (listas, filas, pilhas, deques, árvores binárias, completas e cheias) e algoritmos de busca e ordenação. Desenvolvimento de habilidades didáticas e capacidade de simplificar conceitos complexos.",
        en: "Scholarship teaching assistant with 20 hours per week. Participation in regular classes and teaching reinforcement sessions for clarifying doubts. Teaching fundamental concepts of programming logic in C, data structures (lists, queues, stacks, deques, binary trees, complete and full trees), and search and sorting algorithms. Development of teaching skills and ability to simplify complex concepts."
      }
    },
    {
      company: "Supermercado Santa Mercedes",
      role: { pt: "Encarregado de Loja", en: "Store Manager" },
      period: { pt: "Mar 2019 - Mar 2022", en: "Mar 2019 - Mar 2022" },
      description: {
        pt: "Gestão de equipe e operações de loja.",
        en: "Team management and store operations."
      }
    }
  ],
  education: [
    {
      institution: "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP",
      degree: { pt: "Bacharelado em Ciência da Computação", en: "Bachelor of Computer Science" },
      period: { pt: "Fev 2021 - Dez 2025", en: "Feb 2021 - Dec 2025" }
    }
  ],
  skills: [
    {
      category: { pt: "Linguagens de Programação", en: "Programming Languages" },
      items: ["Python", "Java", "JavaScript", "TypeScript"]
    },
    {
      category: { pt: "Frameworks e Bibliotecas de IA/ML", en: "AI/ML Frameworks & Libraries" },
      items: ["PydanticAI", "LangChain", "LangGraph", "CrewAI", "Hugging Face"]
    },
    {
      category: { pt: "Frameworks Back-end", en: "Backend Frameworks" },
      items: ["Flask", "FastAPI", "Node.js", "Spring Boot", "NestJS"]
    },
    {
      category: { pt: "Tecnologias Front-end", en: "Frontend Technologies" },
      items: ["React", "Next.js", "Angular", "Streamlit"]
    },
    {
      category: { pt: "Bancos de Dados", en: "Databases" },
      items: ["MySQL", "PostgreSQL", "Neo4j", "Vector DBs"]
    },
    {
      category: { pt: "Ferramentas e Infraestrutura", en: "Tools & Infrastructure" },
      items: ["Git", "Azure", "Docker", "Jupyter", "Scrum"]
    }
  ],
  projects: [
    {
      title: { pt: "Agente IA para Homebuilders", en: "AI Agent for Homebuilders" },
      description: {
        pt: "Assistente virtual inteligente especializado no setor de construção civil (Homebuilders), capaz de responder dúvidas técnicas, auxiliar em orçamentos e fornecer informações sobre materiais e processos construtivos. Utiliza RAG para contextualização com documentação técnica específica do cliente.",
        en: "Intelligent virtual assistant specialized in the construction sector (Homebuilders), capable of answering technical questions, assisting with budgets, and providing information about materials and construction processes. Uses RAG for contextualization with client-specific technical documentation."
      },
      tech: ["LangChain", "Python", "RAG", "Vector DB"],
    },
    {
      title: { pt: "Agente IA para Advogados", en: "AI Agent for Lawyers" },
      description: {
        pt: "Ferramenta de IA para pesquisa jurídica automatizada e análise de documentos legais. Auxilia advogados na busca de jurisprudências, elaboração de petições e análise de contratos, utilizando processamento de linguagem natural e recuperação de informações contextualizadas.",
        en: "AI tool for automated legal research and legal document analysis. Assists lawyers in searching for jurisprudence, drafting petitions, and analyzing contracts, using natural language processing and contextualized information retrieval."
      },
      tech: ["LangGraph", "Python", "RAG", "PostgreSQL"],
    },
    {
      title: { pt: "Atendimento ao Cliente com IA Autônoma", en: "Customer Service with Autonomous AI" },
      description: {
        pt: "Agente autônomo capaz de realizar atendimento completo ao cliente sem intervenção humana. Processa solicitações, resolve problemas comuns, agenda compromissos e escala para atendentes humanos quando necessário. Integrado com sistemas CRM e bases de conhecimento.",
        en: "Autonomous agent capable of providing complete customer service without human intervention. Processes requests, resolves common issues, schedules appointments, and escalates to human agents when necessary. Integrated with CRM systems and knowledge bases."
      },
      tech: ["CrewAI", "FastAPI", "LangChain", "PostgreSQL"],
    },
    {
      title: { pt: "Copiloto IA para Atendentes", en: "AI Copilot for Customer Service Agents" },
      description: {
        pt: "Sistema de suporte em tempo real para atendentes humanos. A IA analisa a conversa em andamento e sugere respostas, soluções e próximos passos, aumentando a eficiência e qualidade do atendimento. Funciona como um assistente inteligente que aprende com as interações.",
        en: "Real-time support system for human customer service agents. The AI analyzes ongoing conversations and suggests responses, solutions, and next steps, increasing efficiency and service quality. Works as an intelligent assistant that learns from interactions."
      },
      tech: ["LangChain", "WebSocket", "FastAPI", "React"],
    }
  ]
};
