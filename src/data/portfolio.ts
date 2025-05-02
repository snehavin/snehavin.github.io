import type { StaticImageData } from "next/image";

export interface Portfolio {
  title: string;
  date: string;
  description: string;
  technologies?: string[];
  imageUrl?: string | StaticImageData;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [

  {
    title: "Customer Service Generative AI Chatbot",
    date: "2024",
    description:
      "Designed and implemented a Generative AI Chatbot for Payactiv, a financial services organization, to streamline account creation, achieving an 80% success rate in the Proof of Concept.",
    technologies: ["Amazon Bedrock", "Anthropic Claude 2.0", "AWS Lambda", "API Gateway"],
    imageUrl:
      "/PayactivImage.jpeg",
    projectUrl: "/PracticumReport-Payactiv.pdf",
  },
  {
    title: "Job Search Assistant",
    date: "2025",
    description:
      "Developed a Job Search Chatbot, using the OpenAI API, to match users' resumes and desired job titles with relevant job postings.",
    technologies: ["Python", "Retrieval-Augmented Generation (RAG)", "LangChain", "OpenAI API"],
    imageUrl:
      "/JobSearchAssistant.jpeg",
    projectUrl: "https://github.com/snehavin/JobSearchAssistant",
  },
  {
    title: "Formula 1 Rank Predictor",
    date: "2025",
    description:
      "Developed a learning-to-rank model to predict Formula 1 race outcomes based on qualifying, telemetry, and weather data.",
    technologies: ["Python", "XGBRanker", "scikit-learn", "Optuna"],
    imageUrl:
      "/formula1logo.jpeg",
    projectUrl: "https://github.com/snehavin/F1-RankingModel",
  },
];
