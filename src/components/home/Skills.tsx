import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MonitorIcon, DatabaseIcon, LinkIcon, TerminalIcon, CodeIcon } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js"],
      icon: <MonitorIcon />,
    },
    {
      category: "Backend",
      items: ["SQL"],
      icon: <DatabaseIcon />,
    },
    {
      category: "Blockchain",
      items: ["Web3", "Smart Contracts", "Ethereum Network"],
      icon: <LinkIcon />,
    },
    {
      category: "System",
      items: ["NixOS", "Linux Systems"],
      icon: <TerminalIcon />,
    },
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Solidity", "Python", "Basic Java", "Basic C"],
      icon: <CodeIcon />,
    },
  ];

  return (
    <section className="py-16 bg-muted rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <Card
              key={skillGroup.category}
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="rounded-full p-2 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {skillGroup.category}
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, index) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-all"
                      style={{
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      <Badge
                        variant="outline"
                        className="h-2 w-2 p-0 rounded-full bg-primary group-hover:animate-pulse"
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
