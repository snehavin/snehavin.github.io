export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  courses?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023 - 2025",
    institution: "Santa Clara University",
    degree: "M.S. in Information Systems",
    courses: "Deep Learning, Natural Language Processing, Big Data Modeling",
  },
  {
    year: "2019 — 2022",
    institution: "Santa Clara University",
    degree: "B.S. in Management Information Systems",
    courses: "Statistics & Data Analysis, Data Analytics with Python"
  },
];
