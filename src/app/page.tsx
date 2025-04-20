import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Education from "@/components/home/Education";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Education />
      </Suspense>
    </div>
  );
}
