import React, { useEffect, useState } from "react";
import data from "./data";
import Mobile from "./Mobile";
import Navbar from "./Navbar";

const getStorgeTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorgeTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main className="bg-white mobile">
      <nav>
        <div className="nav-center">
          {/* <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button> */}
          <Navbar />
        </div>
      </nav>
      <section className="articles">
        <Mobile />
      </section>
    </main>
  );
}

export default App;
