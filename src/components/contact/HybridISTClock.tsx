"use client";

import { useEffect, useState } from "react";

interface HybridISTClockProps {
  initialTime: string;
  initialDate: string;
}

export default function HybridISTClock({ initialTime, initialDate }: HybridISTClockProps) {
  const [time, setTime] = useState<string>(initialTime);
  const [date, setDate] = useState<string>(initialDate);
  const [isClientSide, setIsClientSide] = useState<boolean>(false);

  useEffect(() => {
    // Mark that we're now on the client side
    setIsClientSide(true);

    // Function to update the time
    function updateTime() {
      const now = new Date();

      // Format the time in IST (UTC+5:30)
      const timeOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      const dateOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      setTime(now.toLocaleTimeString("en-US", timeOptions));
      setDate(now.toLocaleDateString("en-US", dateOptions));
    }

    // Update time immediately and then every second
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="inline-flex items-center">
      <div className="flex flex-col items-end">
        <span className="font-mono text-primary-light dark:text-primary-dark text-lg">
          {time}
          {isClientSide && <span className="animate-pulse ml-1">•</span>}
        </span>
        <span className="text-sm text-slate-500 dark:text-slate-400">{date}</span>
      </div>
      <span className="ml-2 text-xs bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">IST</span>
    </div>
  );
}
