"use client";

import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";

// Define types for the project data
interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectListProps {
  initialProjects: Project[];
  categories: string[];
}

export default function ProjectList({ initialProjects, categories }: ProjectListProps) {
  // State for the currently selected category filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? initialProjects
      : initialProjects.filter((project) => project.category === selectedCategory);

  return (
    <>
      {/* Project filter UI */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              category === selectedCategory
                ? "bg-primary-light dark:bg-primary-dark text-black dark:text-white"
                : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Show empty state when no projects match the filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
        </div>
      )}
    </>
  );
}
