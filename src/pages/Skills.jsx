import useApiList from "../hooks/useApiList";
import { normalizeImage } from "../utils/normalizeImage";

import figma       from "../assets/figma.png";
import illustrator from "../assets/illustrator.png";
import html5       from "../assets/html-5.png";
import css3        from "../assets/css-3.png";
import js         from "../assets/js.png";
import wordpress  from "../assets/wordpress.png";

const STATIC_SKILLS = [
  { id: "static-s1", name: "FIGMA",       level: "60%", icon: figma },
  { id: "static-s2", name: "ILLUSTRATOR", level: "70%", icon: illustrator },
  { id: "static-s3", name: "HTML",        level: "80%", icon: html5 },
  { id: "static-s4", name: "CSS",         level: "70%", icon: css3 },
  { id: "static-s5", name: "JAVASCRIPT",  level: "50%", icon: js },
  { id: "static-s6", name: "WORDPRESS",   level: "60%", icon: wordpress },
];

function dedupeSkills(staticArr, dynamicArr) {
  const seen = new Set(staticArr.map(s => (s.name || "").toLowerCase().trim()));
  const uniqueDynamic = dynamicArr.filter(s => {
    const k = (s.name || "").toLowerCase().trim();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  return [...staticArr, ...uniqueDynamic];
}

export default function Skills() {
  const { data: apiSkills, loading, error } = useApiList("/api/skills");

  const dynamic = (apiSkills || []).map((s, i) => ({
    id:    s.id || s._id || `skill-${i}`,
    name:  s.name || "Skill",
    level: s.level || "",
    icon:  normalizeImage(s.icon, figma),
  }));

  const all = dedupeSkills(STATIC_SKILLS, dynamic);

  return (
    <section id="skill">
      <div className="skill-container custom_container">
        <div className="skill-title-deatils">
          <p className="title-heading">Explore My</p>
          <h1 className="common-heading">Skills</h1>
        </div>

        {loading && <p style={{ color: "#fff", textAlign: "center" }}>Loading skills…</p>}
        {!loading && error && (
          <p style={{ color: "#ff6b6b", textAlign: "center" }}>
            Could not load new skills from admin. Showing static items.
          </p>
        )}

        <div className="skill-row custom_row">
          {all.map((s) => (
            <div key={s.id} className="custom_box">
              <div className="skills-software">
                <img src={s.icon} alt={s.name} />
                {s.level ? <p className="skill-percentage">{s.level}</p> : null}
              </div>
              <p className="skill-software-title">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
