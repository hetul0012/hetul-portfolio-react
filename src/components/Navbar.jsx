import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header" id="header">
      <div className="header_container custom_container">
        <div className="custom_row">
          <div className="custom_col">
            <nav>
              <div className="logo">
                <a href="/">Hetul Suthar</a>
              </div>

              <div
                className={`hamburger ${open ? "active" : ""}`}
                onClick={() => setOpen(!open)}
                aria-label="Toggle navigation"
                role="button"
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>

              <div className={`nav-bar ${open ? "active" : ""}`} id="nav-bar">
                <ul onClick={() => setOpen(false)}>
                  <li><a href="#home" className="home-active">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skill">Skills</a></li>
                  <li><a href="#service">Services</a></li>
                  <li><a href="#project">Project</a></li>
                  <li><a href="/case-study.html" target="_blank" rel="noreferrer">Case Study</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
