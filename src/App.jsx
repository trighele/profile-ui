import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import LandingPage from "./components/pages/LandingPage.jsx";
import ResumePage from "./components/pages/Resume/ResumePage.jsx";
import ProjectsPage from "./components/pages/Projects/ProjectsPage.jsx";
import AboutMePage from "./components/pages/AboutMe/AboutMePage.jsx";
import ContactPage from "./components/pages/Contact/ContactPage.jsx";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Router>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/aboutme" element={<AboutMePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default AppWrapper;
