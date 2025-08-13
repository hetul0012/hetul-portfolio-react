import { useEffect, useState } from "react";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      id="scroll_btn"
      onClick={scrollTop}
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        borderRadius: "50%",
        width: 48,
        height: 48,
        border: "2px solid #fff",
        background: "#000",
        color: "#fff",
        cursor: "pointer",
        transition: "opacity .3s ease",
        zIndex: 50
      }}
      aria-label="Scroll to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}
