export type MyProjectType = {
  key: number;
  title: string;
  repo_url: string;
  description: string;
  tech_stack: string[];
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
    ],
  },
  {
    key: 2,
    title: "Splitsmart",
    repo_url: "https://github.com/Ali1raz/split-smart",
    description:
      "built in flutter supabase, where you can add your balance, create group with your friends to chat or make expenses, expenses would be divided among group members. see all expenses and mark them complete.",
    tech_stack: ["Flutter", "Dart", "supabase"],
  },
  {
    key: 3,
    title: "Github Activity",
    repo_url:
      "https://github.com/Ali1raz/MobileApp-development-/tree/master/github_api",
    description:
      "A mobile application built using Flutter that utilizes the GitHub API to display user profiles, repositories, and recent activity. The app allows users to search for GitHub profiles, view their repositories, and see their recent public activity.",
    tech_stack: ["Flutter", "Dart", "GitHub API"],
  },
  {
    key: 4,
    title: "Flashcard",
    repo_url:
      "https://github.com/Ali1raz/MobileApp-development-/tree/master/flashcards",
    description:
      "A Mobile Application built using flutter and sqlite, for managing cards organized into decks",
    tech_stack: ["flutter", "dart", "sqlite"],
  },
  {
    key: 5,
    title: "Task Tracker",
    repo_url: "https://github.com/Ali1raz/flutter_dev_full_stack",
    description:
      "A comprehensive platform where administrators can manage students and their tasks while students can track and complete their assignments .",
    tech_stack: ["Flutter", "Dart", "Laravel", "MySQL"],
  },
];
