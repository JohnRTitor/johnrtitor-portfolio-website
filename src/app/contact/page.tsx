import { DiscordIcon, TelegramIcon } from "@/components/icons";
import { MatrixIcon } from "@/components/icons/MatrixIcon";
import { MapPinIcon } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Masum Reza (JohnRTitor)",
  description:
    "Contact section of personal portfolio website of Masum Reza, a Web3 and React developer",
};

export default function ContactPage() {
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/*
            <div>
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              <ContactForm />
            </div>
          */}

          {/* Contact information section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact information</h2>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
              <div className="grid gap-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-xl text-primary-light dark:text-primary-dark">
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

              {/* Availability section */}
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-lg mb-3">My Availability</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I&apos;m currently available for freelance work or full-time positions. My
                  working hours are 9 AM to 6 PM IST.
                </p>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map or additional content can be added here */}
        <div className="mt-16 p-6 bg-surface-light dark:bg-surface-dark rounded-2xl text-center">
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
