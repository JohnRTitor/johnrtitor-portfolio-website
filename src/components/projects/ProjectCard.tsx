import Link from "next/link";
import Image from "next/image";
import { GitHubIcon } from "@/components/icons";
import { ExternalLinkIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  isFirst?: boolean;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  isFirst = false,
  index = 0,
}: ProjectCardProps) {
  // Calculate animation delay class based on index
  const getAnimationDelay = () => {
    const delays = [
      "animate-delay-100",
      "animate-delay-200",
      "animate-delay-300",
      "animate-delay-400",
      "animate-delay-500",
    ];
    return delays[index % delays.length];
  };

  return (
    <Card
      className={cn(
        "bg-white dark:bg-slate-800 overflow-hidden h-full flex flex-col",
        "transition-all duration-300 hover:shadow-xl hover:-translate-y-2",
        "animate-fade-in-up",
        getAnimationDelay(),
      )}
    >
      <div className="relative w-full h-48 overflow-hidden group">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={isFirst}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="transition-colors duration-300 group-hover:bg-gray-50 dark:group-hover:bg-slate-700">
        <h3 className="text-xl font-semibold transition-colors duration-300 hover:text-primary">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-gray-100 dark:bg-slate-700 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-4 pb-6">
        {githubUrl && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="transition-all duration-300 hover:bg-gray-100 dark:hover:bg-slate-700"
          >
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <GitHubIcon className="h-4 w-4 transition-transform group-hover:animate-spin-slow" />
              <span>Code</span>
            </Link>
          </Button>
        )}

        {liveUrl && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <ExternalLinkIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span>Live Demo</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
