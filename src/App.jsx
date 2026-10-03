import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "system");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const applyTheme = (value) => {
      const dark =
        value === "dark" ||
        (value === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    };

    localStorage.setItem("theme", theme);
    applyTheme(theme);
  }, [theme]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="site-title">Linux_sys_admin_tool</div>

          <div className="header-actions">
            <div className="theme-menu-container">
              <button
                className="theme-menu-btn"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
              >
                <span>◐</span>
                <span>Theme</span>
                <span className="caret-icon">▼</span>
              </button>

              {open && (
                <ul className="theme-dropdown">
                  {[
                    ["system", "OS Default"],
                    ["light", "Light"],
                    ["dark", "Dark"],
                  ].map(([value, label]) => (
                    <li key={value}>
                      <button
                        className={`theme-option ${theme === value ? "active" : ""}`}
                        onClick={() => {
                          setTheme(value);
                          setOpen(false);
                        }}
                      >
                        <span>{label}</span>
                        {theme === value && <span className="checkmark">✓</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="wrapper">
        <main>
          <article>
            <header className="article-meta">
              <h1>Dogfood hackathon write-up</h1>
		  	  <p>Heyy</p>
            </header>
          </article>
        </main>
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="site-title">Linux_sys_admin_tool</div>
        </div>
      </footer>
    </>
  );
}

export default App;
