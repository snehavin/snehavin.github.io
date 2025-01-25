export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "June 2024 - August 2024",
    title: "Data Engineering Intern",
    company: "Cadent",
    description:
      "Implemented Unity Catalog on Databricks to establish a unified data catalog and enable federated querying of external data sources, improving data security and reducing data querying costs.",
  },
  {
    date: "March 2024 - May 2024",
    title: "Data Science Intern",
    company: "Cadent",
    description:
      "Optimized and deployed a probabilistic classification model into production to identify the likelihood of winning advertising bids. Conducted feature engineering and hyperparameter tuning to improve model performance.",
  },
  {
    date: "June 2022 - September 2022",
    title: "Market Development Intern",
    company: "CommScope",
    description:
      "Developed a market development plan to increase market share through identifying untapped segments of the US market and local strategic partnerships.",
  },
];
