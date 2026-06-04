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
      "A Learning Management System (LMS) built using Next.js, Typescript, tiptap text editor, prisma, Neon, s3 bucket, Better-Auth, Arcjet. Provides a platform for admins to create courses and blogs while users can enroll in courses, access course materials, and read blogs.",
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
    title: "CUI portal enhancement",
    repo_url: "https://portal-cui.vercel.app/",
    badges: ["Developing"],
    description:
      "Enhancing the CUI portal Vehari Campus to allow students to request leave, fee installments and complaints reviewed by HOD and Batch-Advisor. Allowing HOD, accountant and admin to create or schedule announcements. Student admission applications are reviewed by Clerk. Students can request for fee installments which is reviewed by HOD with fine management.",
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
    repo_url: "https://github.com/Ali1raz/team-flow/",
    badges: ["Current", "Open Source"],
    description:
      "AI-ready team communication platform allowing users to create workspaces, channels with invitations. Allows users to send messages, files, and threads. Users can compose messages using AI and generate threads summary. (More features coming soon)",
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
    ],
  },
  {
    key: 4,
    title: "Crawler",
    repo_url: "https://github.com/Ali1raz/crawler",
    badges: ["Open Source", "Developing"],
    description:
      "Crawls websites for your AI agent context. Returns markdown perfect for LLM consumption.",
    tech_stack: [
      "Tanstack start",
      "Prisma",
      "Neon",
      "Typescript",
      "Shacn UI",
      "Firecrawl",
      "Better-Auth",
      "AI sdk",
      "Open router",
    ],
  },
  {
    key: 5,
    title: "Splitsmart",
    repo_url: "https://github.com/Ali1raz/split-smart",
    badges: ["Open Source"],
    description:
      "built in flutter supabase, where you can add your balance, create group with your friends to chat or make expenses, expenses would be divided among group members. see all expenses and mark them complete.",
    tech_stack: ["Flutter", "Dart", "supabase"],
  },
  {
    key: 6,
    title: "Github Activity",
    repo_url:
      "https://github.com/Ali1raz/MobileApp-development-/tree/master/github_api",
    badges: ["Open Source"],
    description:
      "A mobile application built using Flutter that utilizes the GitHub API to display user profiles, repositories, and recent activity. The app allows users to search for GitHub profiles, view their repositories, and see their recent public activity.",
    tech_stack: ["Flutter", "Dart", "GitHub API"],
  },
  {
    key: 7,
    title: "Flashcard",
    badges: ["Open Source"],
    repo_url:
      "https://github.com/Ali1raz/MobileApp-development-/tree/master/flashcards",
    description:
      "A Mobile Application built using flutter and sqlite, for managing cards organized into decks",
    tech_stack: ["flutter", "dart", "sqlite"],
  },
  {
    key: 8,
    title: "Task Tracker",
    repo_url: "https://github.com/Ali1raz/flutter_dev_full_stack",
    description:
      "A comprehensive platform where administrators can manage students and their tasks while students can track and complete their assignments .",
    tech_stack: ["Flutter", "Dart", "Laravel", "MySQL"],
  },
];
