import React, { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  return (
    <>
      <div className="h-4/5 flex items-center justify-center text-5xl dark:bg-black dark:text-white">
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </div>
    </>
  );
}
