import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      <input
        type="checkbox"
        className="toggle theme-controller mx-3"
        onChange={toggleTheme}
        checked={theme == "dark"}
      />
    </div>
  );
};

export default ToggleTheme;
