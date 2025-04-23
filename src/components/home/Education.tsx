import { GraduationCapIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Education() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-12 w-12 bg-primary text-muted-foreground">
                <AvatarFallback>
                  <GraduationCapIcon className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>

              <div>
                <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground mt-1">University of Calcutta</p>
                <div className="mt-4">
                  <p>
                    Studied core computer science concepts including algorithms, data structures,
                    operating systems, and software engineering. Specialized in web development,
                    reproducible development environments and declarative rapid system deployment.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
