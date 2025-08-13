import { useEffect } from "react";
import Typed from "typed.js";
import VanillaTilt from "vanilla-tilt";

export default function Home() {
  useEffect(() => {
    // Typed.js
    const typed = new Typed(".auto-type", {
      strings: ["Hetul Suthar", "Web Designer", "Web Developer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    // VanillaTilt on elements with .tilt
    const nodes = document.querySelectorAll(".tilt");
    VanillaTilt.init(nodes, {
      reverse: true,
      max: 10,
      speed: 300,
      scale: 1,
      reset: true,
      perspective: 600,
      transition: true,
    });

    return () => {
      typed.destroy();
      nodes.forEach((n) => n.vanillaTilt?.destroy());
    };
  }, []);

  return (
    <section id="home">
      <div className="home-container">
        <div className="home-row">
          <div className="image-col">
            <img src="/src/assets/profile-img-1.png" alt="profile img" className="tilt" />
          </div>

          <div className="home-details">
            <h2 className="second-heading">Hello, I'm </h2>
            <h1 className="text-title main-heading"><span className="auto-type"></span>.</h1>
          </div>

          <div className="btn-container">
            <a className="common-button" href="#contact">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
