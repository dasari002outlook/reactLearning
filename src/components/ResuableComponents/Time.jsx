//write a component to display current time on screen in hh:mm:ss format

import React from "react";

const Time = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div>
      <h2 className="time">
        Time: {hours} : {minutes} : {seconds}
      </h2>
    </div>
  );
};

export default Time;
