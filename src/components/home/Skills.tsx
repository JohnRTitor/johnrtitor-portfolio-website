import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js"],
      icon: "💻",
    },
    {
      category: "Backend",
      items: ["SQL"],
      icon: "🔧",
    },
    {
      category: "Blockchain",
      items: ["Web3", "Smart Contracts", "Ethereum Network"],
      icon: "⛓️",
    },
    {
      category: "System",
      items: ["NixOS", "Linux Systems"],
      icon: "🖥️",
    },
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Solidity", "Python", "Basic Java", "Basic C"],
      icon: "📝",
    },
  ];

  return (
    <section className="py-16 bg-muted rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category} className="hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="text-3xl mb-2">{skillGroup.icon}</div>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <Badge variant="outline" className="h-2 w-2 p-0 rounded-full bg-primary" />
                      <span>{skill}</span>
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
