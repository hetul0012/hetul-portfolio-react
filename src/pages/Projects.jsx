import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

// Your original static projects (from the HTML you shared)
const staticProjects = [
  {
    title: "Codely Clone Website",
    image: "/src/assets/codely-clone-mockups.png",
    url: "https://hetul0012.github.io/codely-clone/"
  },
  {
    title: "Online Furniture Website",
    image: "/src/assets/funiture-mockups.png",
    url: "https://hetul0012.github.io/online-furniture-website/"
  },
  {
    title: "Ui Clone Website",
    image: "/src/assets/ui-mockups.png",
    url: "https://hetul0012.github.io/ui-clone/"
  },
  {
    title: "Interior Design Website",
    image: "/src/assets/interior-clone-mockups.png",
    url: "https://hetul0012.github.io/furniture-website/"
  },
  {
    title: "Bike Modifier Website",
    image: "/src/assets/bike-mockups.png",
    url: "https://hetul0012.github.io/bikemodify/"
  },
  {
    title: "New Age Granite & Marble - Clone",
    image: "/src/assets/soon-02.png",
    url: "/"
  }
];

const API_BASE = import.meta.env.VITE_API_BASE || "https://admin-portfolio-5ws2.onrender.com";

// helper that tries multiple paths until one works
async function tryFetchJSON(paths) {
  for (const path of paths) {
    try {
      const res = await fetch(path, { headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      // some servers return text/html by mistake; guard it
      const text = await res.text();
      const json = JSON.parse(text);
      return json;
    } catch (e) {
      // continue to next path
    }
  }
  throw new Error("All endpoints failed");
}

export default function Projects() {
  const [extra, setExtra] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // Try common endpoint shapes (adjust once you send me your real one)
        const data = await tryFetchJSON([
          `${API_BASE}/projects`,
          `${API_BASE}/api/projects`,
          `${API_BASE}/api/v1/projects`,
        ]);

        const normalized = (Array.isArray(data) ? data : []).map((p, i) => ({
          title: p.title || p.name || p.projectTitle || `Project ${i + 1}`,
          image: p.image || p.imageUrl || p.thumbnail || "/img/soon-02.png",
          url:   p.url || p.liveUrl || p.demoUrl || p.link || "/",
        }));

        setExtra(normalized);
      } catch (err) {
        setError(err.message || "Failed to fetch");
      }
    })();
  }, []);

  const allProjects = [...staticProjects, ...extra];

  return (
    <section id="project">
      <div className="project-container custom_container">
        <div className="poject-title-deatils">
          <p className="title-heading">Browse My Recent</p>
          <h1 className="common-heading">Latest Projects</h1>
        </div>

        {error && (
          <p style={{ color: "#ff6b6b", textAlign: "center", marginTop: 10 }}>
            (Optional API) Could not load extra projects: {error}
          </p>
        )}

        <div className="project-row custom_row">
          {allProjects.map((p, idx) => (
            <ProjectCard key={`${p.title}-${idx}`} title={p.title} image={p.image} url={p.url} />
          ))}
        </div>
      </div>
    </section>
  );
}