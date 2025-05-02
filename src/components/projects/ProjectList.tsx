"use client";

import { useState, useEffect } from "react";
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
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);
  const [isFiltering, setIsFiltering] = useState(false);

  // Filter projects based on the selected category
  useEffect(() => {
    setIsFiltering(true);

    // Add a small delay to make the animation more visible
    const timer = setTimeout(() => {
      const newFilteredProjects =
        selectedCategory === "All"
          ? initialProjects
          : initialProjects.filter((project) => project.category === selectedCategory);

      setFilteredProjects(newFilteredProjects);
      setIsFiltering(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, initialProjects]);

  return (
    <>
      {/* Project filter UI */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
        {categories.map((category, index) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={category === selectedCategory ? "default" : "outline"}
            size="sm"
            className={`rounded-full transition-all duration-300 hover:scale-105 animate-fade-in animate-delay-${index + 1}00`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            {...project}
            isFirst={index === 0}
            index={index}
          />
        ))}
      </div>

      {/* Show empty state when no projects match the filter */}
      {filteredProjects.length === 0 && !isFiltering && (
        <div className="text-center py-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">No projects found in this category.</p>
          <Button
            onClick={() => setSelectedCategory("All")}
            variant="outline"
            className="transition-all duration-300 hover:scale-105 animate-bounce"
          >
            Show all projects
          </Button>
        </div>
      )}

      {/* Loading state */}
      {isFiltering && (
        <div className="text-center py-12">
          <p className="text-muted-foreground animate-pulse">Loading projects...</p>
        </div>
      )}
    </>
  );
}
