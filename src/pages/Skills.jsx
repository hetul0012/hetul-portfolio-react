export default function Skills() {
    return (
      <section id="skill">
        <div className="skill-container custom_container">
          <div className="skill-title-deatils">
            <p className="title-heading">Explore My</p>
            <h1 className="common-heading">Skills</h1>
          </div>
  
          <div className="skill-row custom_row">
            {[
              {img: "/src/assets/figma.png", title: "FIGMA", pct: "60%"},
              {img: "/src/assets/illustrator.png", title: "ILLUSTRATOR", pct: "70%"},
              {img: "/src/assets/html-5.png", title: "HTML", pct: "80%"},
              {img: "/src/assets/css-3.png", title: "CSS", pct: "70%"},
              {img: "/src/assets/js.png", title: "JAVASCRIPT", pct: "50%"},
              {img: "/src/assets/wordpress.png", title: "WORDPRESS", pct: "60%"},
            ].map((s) => (
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
  