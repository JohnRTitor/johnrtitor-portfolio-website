import { Metadata } from "next";
import ProjectList from "@/components/projects/ProjectList";

// Define metadata for the Projects page
export const metadata: Metadata = {
  title: "Projects | JohnRTitor Portfolio",
  description: "Explore my projects in web development, Web3, Linux and more.",
};

// All projects data - defined at the server level
const projects = [
  {
    title: "SimpleStorage DApp (Web3)",
    description:
      "A Web3 decentralized application built on Ethereum to demonstrate interact with basic smart contracts.",
    technologies: ["React", "Next.js", "Solidity", "Wagmi", "Viem", "Tailwind CSS"],
    category: "Web3",
    imageUrl: "/images/projects/simple-storage-blockchain-sample-stock-photo.avif",
    githubUrl: "https://github.com/JohnRTitor/nextjs-simple-storage",
    liveUrl: "https://nextjs-simple-storage.vercel.app/",
  },
  {
    title: "NixOS Configuration",
    description:
      "A reproducible NixOS configuration with dotfiles for a productive development environment, featuring custom modules and home-manager integration.",
    technologies: ["Nix", "Linux", "Shell"],
    category: "Linux",
    imageUrl: "/images/projects/nix-conf-sample-stock-photo.avif",
    githubUrl: "https://github.com/JohnRTitor/nix-conf",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS, featuring responsive design and theme switching.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "Web Development",
    imageUrl: "/images/projects/johnrtitor-portfolio-website-sample-stock-photo.avif",
    githubUrl: "https://github.com/JohnRTitor/johnrtitor-portfolio-website",
    liveUrl: "https://johnrtitor-portfolio-website.vercel.app/",
  },
];

// Categories for filtering
const categories = ["All", "Web Development", "Web3", "Linux", "Mobile"];

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique
            challenge that I&apos;ve tackled using various technologies and approaches.
          </p>
        </div>

        {/* Pass the server-rendered data to the client component for filtering */}
        <ProjectList initialProjects={projects} categories={categories} />

        {/* Call to action */}
        <div className="mt-20 text-center animate-fade-in animate-delay-500">
          <h2 className="text-2xl font-bold mb-4">Looking for more?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Check out my GitHub profile for more projects and contributions to open source.
          </p>
          <a
            href="https://github.com/JohnRTitor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-light hover:bg-primary-light/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
