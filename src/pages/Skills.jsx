import figma from "../assets/figma.png";
import illustrator from "../assets/illustrator.png";
import html5 from "../assets/html-5.png";
import css3 from "../assets/css-3.png";
import js from "../assets/js.png";
import wordpress from "../assets/wordpress.png";

export default function Skills() {
  const skills = [
    { img: figma,       title: "FIGMA",       pct: "60%" },
    { img: illustrator, title: "ILLUSTRATOR", pct: "70%" },
    { img: html5,       title: "HTML",        pct: "80%" },
    { img: css3,        title: "CSS",         pct: "70%" },
    { img: js,          title: "JAVASCRIPT",  pct: "50%" },
    { img: wordpress,   title: "WORDPRESS",   pct: "60%" },
  ];

  return (
    <section id="skill">
      <div className="skill-container custom_container">
        <div className="skill-title-deatils">
          <p className="title-heading">Explore My</p>
          <h1 className="common-heading">Skills</h1>
        </div>

        <div className="skill-row custom_row">
          {skills.map((s) => (
            <div key={s.title} className="custom_box">
              <div className="skills-software">
                <img src={s.img} alt={s.title} />
                <p className="skill-percentage">{s.pct}</p>
              </div>
              <p className="skill-software-title">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
