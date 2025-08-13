import ProjectCard from "../components/ProjectCard";
import useApiList from "../hooks/useApiList";
import { normalizeImage } from "../utils/normalizeImage";

// Static assets (import from src/assets)
import codely    from "../assets/codely-clone-mockups.png";
import furniture from "../assets/funiture-mockups.png";
import uiClone   from "../assets/ui-mockups.png";
import interior  from "../assets/interior-clone-mockups.png";
import bike      from "../assets/bike-mockups.png";
import soon      from "../assets/soon-02.png";

const STATIC_PROJECTS = [
  { id: "static-1", title: "Codely Clone Website",        image: codely,    url: "https://hetul0012.github.io/codely-clone/" },
  { id: "static-2", title: "Online Furniture Website",    image: furniture, url: "https://hetul0012.github.io/online-furniture-website/" },
  { id: "static-3", title: "Ui Clone Website",            image: uiClone,   url: "https://hetul0012.github.io/ui-clone/" },
  { id: "static-4", title: "Interior Design Website",     image: interior,  url: "https://hetul0012.github.io/furniture-website/" },
  { id: "static-5", title: "Bike Modifier Website",       image: bike,      url: "https://hetul0012.github.io/bikemodify/" },
  { id: "static-6", title: "New Age Granite & Marble - Clone", image: soon, url: "/" },
];

function dedupeByTitleOrUrl(staticArr, dynamicArr) {
  const seen = new Set(
    staticArr.map(s => (s.title || "").toLowerCase().trim())
             .concat(staticArr.map(s => (s.url || "").toLowerCase().trim()))
  );
  const uniqueDynamic = dynamicArr.filter(p => {
    const t = (p.title || "").toLowerCase().trim();
    const u = (p.url || "").toLowerCase().trim();
    const dup = seen.has(t) || (!!u && seen.has(u));
    if (!dup) {
      if (t) seen.add(t);
      if (u) seen.add(u);
      return true;
    }
    return false;
  });
  return [...staticArr, ...uniqueDynamic];
}

export default function Projects() {
  const { data: apiProjects, loading, error } = useApiList("/api/projects");

  const dynamic = (apiProjects || []).map((p, i) => ({
    id:    p.id || p._id || `api-${i}`,
    title: p.title || "Untitled Project",
    image: normalizeImage(p.image, soon),
    url:   p.url || "/",
  }));

  const all = dedupeByTitleOrUrl(STATIC_PROJECTS, dynamic);

  return (
    <section id="project">
      <div className="project-container custom_container">
        <div className="poject-title-deatils">
          <p className="title-heading">Browse My Recent</p>
          <h1 className="common-heading">Latest Projects</h1>
        </div>

        {loading && <p style={{ color: "#fff", textAlign: "center" }}>Loading projects…</p>}
        {!loading && error && (
          <p style={{ color: "#ff6b6b", textAlign: "center" }}>
            Could not load new projects from admin. Showing static items.
          </p>
        )}

        <div className="project-row custom_row">
          {all.map((p) => (
            <ProjectCard key={p.id} title={p.title} image={p.image} url={p.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
