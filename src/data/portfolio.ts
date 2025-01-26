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
];
