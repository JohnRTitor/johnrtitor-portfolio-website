import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import { Suspense } from "react";

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
