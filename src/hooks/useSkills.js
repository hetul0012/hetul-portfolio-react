import { useEffect, useState } from "react";

export default function useSkills() {
  const API = import.meta.env.VITE_API_BASE || "";
  const [data, setData] = useState([]);
  const [loading, setLoad] = useState(true);
  const [error, setErr] = useState("");

  useEffect(() => {
    let on = true;
    (async () => {
      try {
        const res = await fetch(`${API}/api/skills`, { headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (on) setData(Array.isArray(json) ? json : []);
      } catch (e) {
        if (on) setErr(e.message || "Failed to load skills");
      } finally {
        if (on) setLoad(false);
      }
    })();
    return () => { on = false; };
  }, [API]);

  return { data, loading, error };
}
