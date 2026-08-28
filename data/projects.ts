export type MyProjectType = {
  key: number;
  title: string;
  repo_url: string;
  description: string;
  tech_stack: string[];
  badges?: string[];
};

export const MyProjects: MyProjectType[] = [
  {
    key: 1,
    title: "LMS",
    repo_url: "https://lms-ali1raza.vercel.app/",
    description:
      "- Built a full-stack LMS using Next.js, TypeScript, Tiptap, and Arcjet providing admins to create courses and blogs while allowing users to enroll, access materials, and read content.\
      \n - Designed a responsive UI with Shadcn UI and TailwindCSS for seamless user experience across devices.\
      \n - Built secure authentication and authorization using Better Auth to safeguard user data and ensuring only authorized users can access course materials.\
      \n - Integrated S3 for easy file storage, allowing users to upload and access course materials.",
    tech_stack: [
      "Next.js",
      "Typescript",
      "tiptap",
      "prisma",
      "Neon",
      "s3 bucket",
      "Better-Auth",
      "Arcjet",
      "Shadcn UI",
    ],
  },
  {
    key: 2,
    title: "CUI Portal Enhancement",
    repo_url: "https://portal-cui.vercel.app/",
    badges: ["Open Source"],
    description:
      "- Developed a enhanced university portal for COMSATS Vehari Campus using Next.js, TypeScript, enabling students to submit leave requests, fee installment plans, and complaints reviewed by HOD and Batch Advisor.\
      \n - Implemented role-based dashboards for Admin, HOD, and Batch Advisor, Accountant to manage announcements, and student requests.\
      \n - Integrated Inngest for efficient background job processing, ensuring timely announcements for students and staff.\
      \n - Integrated Arcjet for rate limiting and bot detection to keep portal safe from unethical use.",
    tech_stack: [
      "Next.js",
      "Typescript",
      "Shadcn UI",
      "PostgreSQL",
      "prisma",
      "s3 bucket",
      "Better-Auth",
      "Arcjet",
      "Inngest",
      "nuqs",
      "Tanstack Table",
      "Recharts",
    ],
  },
  {
    key: 3,
    title: "Teamflow",
    repo_url: "https://teamflow-ali1raz.vercel.app",
    badges: ["Current", "Open Source"],
    description:
      "- Built a team communication platform using Next.js and TypeScript enabling users to create workspaces, channels, and invite members.\
      \n - Implemented real-time messaging using Cloudflare Durable Objects with file sharing and threaded replies, keeping conversations organized.\
      \n - Integrated AI-powered message composition and thread summarization to boost team productivity.\
      \n - Implemented Arcjet for rate limiting and bot detection to keep platform safe from unethical use.",
    tech_stack: [
      "Next.js",
      "Typescript",
      "Shadcn UI",
      "PostgreSQL",
      "prisma",
      "Uploadthing",
      "Better-Auth",
      "Arcjet",
      "React query",
      "ORPC",
      "AI sdk",
      "Open router",
      "Durable objects",
    ],
  },
  {
    key: 4,
    title: "Crawler",
    repo_url: "https://github.com/Ali1raz/crawler-mern",
    badges: ["Open Source"],
    description:
      "- Built a Crawler using MERN stack and TypeScript enabling users to save articles to read later, research library that lasts.\
      \n - Implemented Clerk for authentication and authorization.\
      \n - Implemented Firecrawl to crawl websites and extract structured data.\
      \n - Implemented Arcjet for rate limiting and bot detection to keep platform safe from unethical use.",
    tech_stack: [
      "Next.js",
      "Typescript",
      "Shadcn UI",
      "MongoDB",
      "Clerk Auth",
      "Firecrawl",
      "Express js",
    ],
  },
  {
    key: 5,
    title: "Splitsmart",
    repo_url: "https://github.com/Ali1raz/split-smart",
    badges: ["Open Source"],
    description:
      "- Built a cross-platform expense splitting app using Flutter and Supabase enabling users to create groups, chat, and log shared expenses split automatically among members.\
      \n - Implemented expense tracking dashboard allowing users to view all transactions and mark them as settled.",
    tech_stack: ["Flutter", "Dart", "supabase"],
  },
  {
    key: 6,
    title: "Github Activity",
    repo_url:
      "https://github.com/Ali1raz/MobileApp-development-/tree/master/github_api",
    badges: ["Open Source"],
    description:
      "- Built a Flutter mobile app using the GitHub API to search profiles, browse repositories, and view recent public activity.",
    tech_stack: ["Flutter", "Dart", "GitHub API"],
  },
  {
    key: 7,
    title: "Flashcard",
    badges: ["Open Source"],
    repo_url:
      "https://github.com/Ali1raz/MobileApp-development-/tree/master/flashcards",
    description:
      "- Built a Mobile Application using Flutter and SQLite for managing flashcards organized into decks.",
    tech_stack: ["flutter", "dart", "sqlite"],
  },
  {
    key: 8,
    title: "Task Tracker",
    repo_url: "https://github.com/Ali1raz/flutter_dev_full_stack",
    description:
      "- Built a task management platform enabling admins to assign and track student tasks while students monitor and complete their assignments.",
    tech_stack: ["Flutter", "Dart", "Laravel", "MySQL"],
  },
];
