import { useEffect, useState } from "react";

export default function useApiList(endpoint) {
  const API = import.meta.env.VITE_API_BASE || "";
  const [data, setData] = useState([]);
  const [loading, setLoad] = useState(true);
  const [error, setErr] = useState("");

  useEffect(() => {
    let on = true;
    (async () => {
      try {
        const url = `${API}${endpoint}`;
        const res = await fetch(url, { headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (on) setData(Array.isArray(json) ? json : []);
      } catch (e) {
        if (on) setErr(e.message || "Failed to fetch");
      } finally {
        if (on) setLoad(false);
      }
    })();
    return () => { on = false; };
  }, [API, endpoint]);

  return { data, loading, error };
}
