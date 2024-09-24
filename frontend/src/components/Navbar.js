import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const handleDark = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="flex justify-between uppercase px-2 py-5 md:p-5 dark:bg-black dark:text-white">
      <h1 className="font-bold text-2xl">
        <Link to={"/"}>Ashlyn Joshy</Link>
      </h1>
      <div className="flex">
        <p className="mr-4">
          <Link to={"/projects"}>projects</Link>
        </p>
        <button onClick={handleDark}>
          {isDark ? (
            <span className="material-symbols-outlined">light_mode</span>
          ) : (
            <span className="material-symbols-outlined">dark_mode</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
