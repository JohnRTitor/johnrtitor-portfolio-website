import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Masum Reza (JohnRTitor)",
  description:
    "About section of personal portfolio website of Masum Reza, a Web3 and React developer",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/profile.png"
                alt="Masum Reza"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Hi, I&apos;m Masum Reza (JohnRTitor)</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              I&apos;m a passionate developer with expertise in web development and a growing
              interest in Web3 technologies. I enjoy building scalable applications that solve
              real-world problems.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              My journey in programming began during my undergraduate years, where I discovered my
              passion for creating software solutions. Since then, I&apos;ve been constantly
              learning and expanding my skill set.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to
              open-source projects, or enjoying outdoor activities.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">My Approach</h3>
            <p className="text-slate-700 dark:text-slate-300">
              I believe in writing clean, maintainable code that follows best practices. My
              approach to development is focused on user experience, performance, and
              accessibility. I&apos;m always looking for ways to improve my skills and stay updated
              with the latest trends in technology.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Technical Background</h3>
            <p className="text-slate-700 dark:text-slate-300">
              With a strong foundation in Computer Science, I&apos;ve developed expertise in
              various technologies including React, Next.js, Web3, Nix, Linux systems, Python,
              I&apos;m particularly interested in the intersection of web technologies and
              blockchain applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
