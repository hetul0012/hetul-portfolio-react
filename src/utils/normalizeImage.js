const API = import.meta.env.VITE_API_BASE || "";

export function normalizeImage(src, localFallback = "") {
  if (!src && localFallback) return localFallback;
  if (!src) return "";
  if (src.startsWith("http")) return src;
  if (src.startsWith("/uploads")) return `${API}${src}`;
  return `${API}/uploads/${src}`;
}
