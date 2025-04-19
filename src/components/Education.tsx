export default function Education() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md dark:shadow-slate-900/30">
          <div className="flex items-start">
            <div className="bg-blue-600 dark:bg-blue-500 text-white p-4 rounded-md mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">University of Calcutta</p>
              <div className="mt-4 text-slate-700 dark:text-slate-300">
                <p>
                  Studied core computer science concepts including algorithms, data structures,
                  operating systems, and software engineering. Specialized in web development,
                  reproducible development environments and declarative rapid system deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
