import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Masum Reza</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-6">
            Web3 & React Developer
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
            I build modern web applications with a focus on performance, accessibility, and user
            experience. Specializing in React, Next.js, and Web3 technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
            <Image
              src="/images/profile.png"
              alt="Masum Reza"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(max-width: 768px) 16rem, 20rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
