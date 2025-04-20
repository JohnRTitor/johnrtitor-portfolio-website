import Link from "next/link";
import Image from "next/image";
import { GitHubIcon } from "@/components/icons";
import { ExternalLinkIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  category?: string; // Added category prop
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark flex items-center gap-1 transition-colors"
            >
              <GitHubIcon /> <span>Code</span>
            </Link>
          )}

          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark flex items-center gap-1 transition-colors"
            >
              <ExternalLinkIcon /> <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
