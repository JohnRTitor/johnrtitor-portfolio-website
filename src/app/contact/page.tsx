import { DiscordIcon, TelegramIcon } from "@/components/icons";
import { MatrixIcon } from "@/components/icons/MatrixIcon";
import { MapPinIcon, ClockIcon } from "lucide-react";
import { Metadata } from "next";
import HybridISTClock from "@/components/contact/HybridISTClock";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Masum Reza (JohnRTitor)",
  description:
    "Contact section of personal portfolio website of Masum Reza, a Web3 and React developer",
};

export default function ContactPage() {
  // Get current time in IST (UTC+5:30) for initial server render
  const now = new Date();

  // Format the time in IST
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const initialTime = now.toLocaleTimeString("en-US", timeOptions);

  // Format the date in IST
  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const initialDate = now.toLocaleDateString("en-US", dateOptions);

  const contactInfo = [
    /*
    {
      icon: <MailIcon width="24" height="24" />,
      title: "Email",
      detail: "contact@johnrtitor.dev",
      link: "mailto:contact@johnrtitor.dev",
    },
    */
    {
      icon: <MapPinIcon width="24" height="24" />,
      title: "Location",
      detail: "Kolkata, India",
      link: null,
    },
    {
      icon: <DiscordIcon width="24" height="24" />,
      title: "Discord",
      detail: "johnrtitor",
      link: "https://discord.com/users/johnrtitor",
    },
    {
      icon: <TelegramIcon width="24" height="24" />,
      title: "Telegram",
      detail: "@johnrtitor",
      link: "https://t.me/johnrtitor",
    },
    {
      icon: <MatrixIcon width="24" height="24" />,
      title: "Matrix",
      detail: "@johnrtitor:matrix.org",
      link: "https://matrix.to/#/@johnrtitor:matrix.org",
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:col-span-2 mx-auto w-full max-w-2xl animate-slide-up">
            <h2 className="text-2xl font-bold mb-6">Contact information</h2>
            <Card className="p-0 overflow-hidden bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="grid gap-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-start gap-4 transition-all duration-300",
                        "hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-md",
                        "transform hover:translate-x-1",
                      )}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-xl text-primary-light dark:text-primary-dark transition-transform duration-300 hover:scale-110">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.detail}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300">{info.detail}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Current time section */}
                <div className="my-8 py-6 border-y border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="text-xl text-primary-light dark:text-primary-dark animate-pulse">
                      <ClockIcon width="24" height="24" />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                      <div>
                        <h3 className="font-medium text-lg">Current time in India</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          When planning a call or meeting
                        </p>
                      </div>
                      <div className="mt-3 md:mt-0 transition-all duration-300 hover:scale-105">
                        <HybridISTClock initialTime={initialTime} initialDate={initialDate} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability section */}
                <div className="transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-md">
                  <h3 className="font-medium text-lg mb-3">My Availability</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I&apos;m currently available for freelance work or full-time positions. My
                    working hours are 9 AM to 6 PM IST.
                  </p>
                  <div className="flex flex-col space-y-2">
                    {[
                      { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                      { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all duration-200"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span>{item.day}</span>
                        <span
                          className={cn(
                            "font-mono",
                            item.hours === "Closed"
                              ? "text-red-500"
                              : "text-green-600 dark:text-green-400",
                          )}
                        >
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Let's Connect section - with enhanced styling and animation */}
        <div className="mt-16 p-6 bg-surface-light dark:bg-surface-dark rounded-2xl text-center transition-all duration-500 hover:shadow-lg animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. Whether you
            have a question or just want to say hi, feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  );
}
