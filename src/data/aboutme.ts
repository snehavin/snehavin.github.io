import type { StaticImageData } from "next/image";

export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string | StaticImageData;
  blogUrl?: string;
  cvUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  googleScholarUrl?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Sneha Vinod",
  title: "MS Information Systems",
  institution: "Santa Clara University",
  // Note that links work in the description
  description:
    "I recently graduated from Santa Clara University with a Masters of Science in Information Systems. With experience in data science, data engineering, and cloud technologies, I am eager to contribute to impactful solutions that bridge technology and business.",
  email: "sneha22.vinod@gmail.com",
  imageUrl: "/profilepic1.jpeg",
  linkedinUsername: "snehavin",
  cvUrl: "/SnehaVinod-GitResume.pdf",
  // altName: "",
  // secretDescription: "I like dogs.",
};
