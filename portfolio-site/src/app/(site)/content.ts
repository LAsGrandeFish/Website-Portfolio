import { title } from "process";

export const projects = [
  {
    title: "Experimenting with Observability",
    description:
      "Built a distributed tracing pipeline with OpenTelemetry, Grafana, and custom dashboards to surface latency regressions in real time.",
    tech: "TypeScript / Node.js / Grafana",
    href: "#",
  },
  {
    title: "Realtime Collaboration Canvas",
    description:
      "Prototyped a multiplayer whiteboard using CRDTs and WebRTC data channels; shipped to 200 beta users in two weeks.",
    tech: "React / Next.js / WebRTC",
    href: "#",
  },
  {
    title: "Offline-First Reading List",
    description:
      "Designed an offline-first mobile reader with background sync and smart caching policies to minimize data usage on slow networks.",
    tech: "React Native / SQLite / Service Workers",
    href: "#",
  },
  {
    title: "Hi-Fi Spotify Mockup",
    description:
      "Mocked up the Spotify web app from reference screenshots with scrollable sidebar and main content areas plus grouped interactive components for prototyping, deviating only in the typeface choice.",
      tech: "Figma",
      href: "https://www.figma.com/community/file/1474517923546819508/spotify-basic-hi-fi-mockup",
  }
];

export const resources = [
  {
    title: "Engineering Playbook",
    description: "Notes, diagrams, and templates I rely on when spinning up greenfield projects or refactoring legacy systems.",
    href: "#",
  },
  {
    title: "Talk: Designing for Observability",
    description: "Conference session breaking down telemetry primitives and how to introduce them to teams without burning momentum.",
    href: "#",
  },
  {
    title: "Reading List",
    description: "A curated mix of articles, papers, and podcasts that shaped how I approach product-led engineering.",
    href: "#",
  },
];

export const posts = [
  {
    title: "Shipping with Guardrails: Setting Up Feature Flags",
    date: "Aug 12, 2025",
    href: "#",
  },
  {
    title: "Lessons from Scaling a Hobby API to 5M Requests",
    date: "Jun 28, 2025",
    href: "#",
  },
  {
    title: "How I Prototype Faster with Design Tokens",
    date: "May 02, 2025",
    href: "#",
  },
];
