import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

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
      <h1 className="font-bold text-2xl">Ashlyn Joshy</h1>
      <div className="flex">
        <p className="mr-4">projects</p>
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
