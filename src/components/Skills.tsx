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
    <section className="py-16 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md dark:shadow-slate-900/30 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all"
            >
              <div className="text-3xl mb-4">{skillGroup.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
