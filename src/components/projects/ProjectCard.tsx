import Link from "next/link";
import Image from "next/image";
import { GitHubIcon } from "@/components/icons";
import { ExternalLinkIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  category?: string;
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
    <Card className="bg-white dark:bg-slate-800 overflow-hidden h-full flex flex-col transition-all hover:shadow-md p-0">
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 dark:bg-slate-700">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-4 pb-6">
        {githubUrl && (
          <Button asChild variant="outline" size="sm">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>Code</span>
            </Link>
          </Button>
        )}

        {liveUrl && (
          <Button asChild variant="outline" size="sm">
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              <span>Live Demo</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
