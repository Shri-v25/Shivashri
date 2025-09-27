import React, { useState, useEffect } from "react";

function ColorIndicator({ theme }) {
  const [color, setColor] = useState("red");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const colors = theme === "light"
      ? ["red", "green", "blue"]
      : ["orange", "purple", "cyan"];

    let index = 0;

    const interval = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [theme]);

  return (
    <div className="indicator" style={{ backgroundColor: color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "24px" }}>
      {seconds}s
    </div>
  );
}

export default ColorIndicator;