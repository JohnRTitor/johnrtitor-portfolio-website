"use client";

import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";

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
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={category === selectedCategory ? "default" : "outline"}
            size="sm"
            className="rounded-full"
          >
            {category}
          </Button>
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
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </>
  );
}
