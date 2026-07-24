export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  link?: string
}

export interface Experience {
  title: string
  company: string
  period: string
  points: string[]
}

export interface Conference {
  name: string
  organizer: string
  year: number
  description: string
}

export interface Oss {
  name: string
  organizer: string
  description: string
  prs?: string[]
}

export const personalInfo = {
  name: "Sumit Mahajan",
  title: "Software Engineer II @ JPMorgan Chase",
  subtitle: "Backend & Full-Stack | C# / Python / React | GenAI & RAG",
  email: "sumitmahajan2001@gmail.com",
  phone: "+91-8356993363",
  github: "https://github.com/sumit-mahajan",
  linkedin: "https://linkedin.com/in/sumit-mahajan",
  twitter: "https://x.com/sumitcodes",
  location: "Mumbai, India",
  website: "https://sumit-mahajan.vercel.app",
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "32", label: "Migrations Led" },
    { value: "50K+", label: "Txns/Day" },
  ],
  skills: [
    { name: "Python", level: 95 },
    { name: "C# / .NET Core", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "FastAPI", level: 90 },
    { name: "React / Next.js", level: 85 },
    { name: "LangChain / GenAI", level: 85 },
    { name: "AWS (Certified)", level: 85 },
    { name: "PostgreSQL", level: 88 },
    { name: "Docker / K8s", level: 82 },
    { name: "Kafka", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "CI/CD", level: 88 },
  ],
  experience: [
    {
      title: "Software Engineer II (Promoted from SE I)",
      company: "JPMorgan Chase & Co.",
      period: "July 2022 - Present",
      points: [
        "Migrated 32 on-prem microservices to AWS with zero downtime in a team of 5 engineers, provisioning infrastructure using Terraform-based tooling for S3, Lambda, SQS, and EKS.",
        "Built a scalable card-status updater in C# .NET 8 and deployed it on AWS EKS Fargate, slashing operational overhead by 80% through fully serverless infrastructure.",
        "Developed the Card-Funding service using C# .NET 8, AWS Lambda, and SQS, enabling seamless real-time money movement for corporate credit cards.",
        "Built a GenAI-powered customer-care summarization tool (RAG pipeline, LangChain) reducing agent handle time by 25% and boosting CSAT by 15 points.",
        "Automated Terraform plan analysis and SQL generation using LangChain + Vercel AI SDK, cutting infra provisioning time by 50%.",
        "Created a GenBI service using LangGraph agentic workflows for natural-language database querying with dynamic SQL generation.",
      ],
    },
  ],
  projects: [
    {
      title: "Trade Surveillance Engine",
      description: "Real-time engine processing high-volume transactions with ML-based anomaly detection using Python, FastAPI, and Kafka.",
      tech: ["Python", "FastAPI", "Kafka", "PostgreSQL", "Docker"],
    },
    {
      title: "GenAI Customer Care Tool",
      description: "RAG pipeline using LangChain for automated customer care summarization, reducing agent handle time by 25%.",
      tech: ["LangChain", "Python", "RAG", "AWS", "OpenAI"],
    },
    {
      title: "GenBI - Natural Language DB Querying",
      description: "LangGraph-based agentic workflow for dynamic SQL generation from natural language queries.",
      tech: ["LangGraph", "Python", "Vercel AI SDK", "PostgreSQL"],
    },
    {
      title: "Card-Funding Service",
      description: "Real-time money movement service for corporate credit cards using C# .NET 8, AWS Lambda, and SQS.",
      tech: ["C# .NET 8", "AWS Lambda", "SQS", "EKS"],
    },
  ],
  conferences: [
    { name: "AWS Community Day", organizer: "AWS User Group", year: 2024, description: "Speaker - Building Scalable Data Pipelines" },
  ],
  oss: [
    {
      name: "Google Summer of Code 2025-2026",
      organizer: "TensorFlow Probability",
      description: "Implemented 3 probability distribution classes for financial modeling; all PRs merged with zero regression. Designed Monte Carlo simulation module for option pricing, reducing compute by 40% via vectorized ops.",
      prs: ["Distribution Classes", "Monte Carlo Module", "Vectorized Ops"],
    },
  ],
}