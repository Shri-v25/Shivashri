import React from "react";

function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

export default ThemeToggle;