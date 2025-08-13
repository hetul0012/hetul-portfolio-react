import ProjectCard from "../components/ProjectCard";

import codely from "../assets/codely-clone-mockups.png";
import furniture from "../assets/funiture-mockups.png";      
import uiClone from "../assets/ui-mockups.png";
import interior from "../assets/interior-clone-mockups.png";
import bike from "../assets/bike-mockups.png";
import soon from "../assets/soon-02.png";

const staticProjects = [
  {
    title: "Codely Clone Website",
    image: codely,
    url: "https://hetul0012.github.io/codely-clone/",
  },
  {
    title: "Online Furniture Website",
    image: furniture,
    url: "https://hetul0012.github.io/online-furniture-website/",
  },
  {
    title: "Ui Clone Website",
    image: uiClone,
    url: "https://hetul0012.github.io/ui-clone/",
  },
  {
    title: "Interior Design Website",
    image: interior,
    url: "https://hetul0012.github.io/furniture-website/",
  },
  {
    title: "Bike Modifier Website",
    image: bike,
    url: "https://hetul0012.github.io/bikemodify/",
  },
  {
    title: "New Age Granite & Marble - Clone",
    image: soon,
    url: "/",
  },
];

export default function Projects() {
  return (
    <section id="project">
      <div className="project-container custom_container">
        <div className="poject-title-deatils">
          <p className="title-heading">Browse My Recent</p>
          <h1 className="common-heading">Latest Projects</h1>
        </div>

        <div className="project-row custom_row">
          {staticProjects.map((p, idx) => (
            <ProjectCard key={`${p.title}-${idx}`} title={p.title} image={p.image} url={p.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
