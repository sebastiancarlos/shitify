import { useEffect, useState } from "react";

export const Bsod = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((percentage) => percentage + 1);
    }, 80);
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="bsod">
      <h1>:(</h1>
      <h2>
        Your PC ran into a problem and needs to restart. We're just collecting
        some error info, and then we'll restart for you.
      </h2>
      <h2>
        <span id="percentage">{percentage}</span>% complete{" "}
        {percentage > 100 && " - Thanks for using Shitify.js!"}
      </h2>
    </div>
  );
};
