import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function DarkModeToggler() {
  const isAutoDarkMode = () => {
    const local = localStorage.getItem("darkMode");
    if (local === "true") {
      return true;
    }
    if (local === "false") {
      return false;
    }
    return true;
  };

  const [isDarkMode, setDarkMode] = useState(isAutoDarkMode());

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <DarkModeSwitch
        id="darkmode-switch"
        sunColor="#333"
        moonColor="#f1f1f1"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={24}
      />
    </div>
  );
}

export default DarkModeToggler;
