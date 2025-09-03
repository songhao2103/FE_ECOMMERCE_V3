import { useEffect, useState } from "react";

const formatNumber = (value: number) => (value < 10 ? `0${value}` : value);

interface CountdownTimerProps {
  deadline: string | number | Date;
}

const CountdownTimer = ({ deadline }: CountdownTimerProps) => {
  const [showTime, setShowTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date(deadline).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setShowTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      setShowTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="flex gap-4">
      {[
        { label: "Days", value: showTime.days },
        { label: "Hours", value: showTime.hours },
        { label: "Minutes", value: showTime.minutes },
        { label: "Seconds", value: showTime.seconds },
      ].map((item, idx) => (
        <div key={item.label} className="flex items-center">
          <div className="text-center">
            <p className="text-sm font-semibold">{item.label}</p>
            <p className="text-3xl font-bold lg:text-4xl">
              {formatNumber(item.value)}
            </p>
          </div>
          {idx < 3 && (
            <div className="flex flex-col gap-2 mx-3 mt-6">
              <div className="w-[6px] h-[6px] rounded-full bg-pink-600" />
              <div className="w-[6px] h-[6px] rounded-full bg-pink-600" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
