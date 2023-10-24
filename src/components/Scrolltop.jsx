import { useEffect, useState } from "react";

export default function Scrolltop() {
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed-button fixed bottom-10 right-10 z-10 opacity-0 pointer-events-none transition-opacity duration-200 ${
        showScrollButton ? "opacity-100 pointer-events-auto" : ""
      }`}
    >
      <button
        onClick={goTop}
        className="rounded-full bg-slate-900 text-violet-400 px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"
        aria-label="GoTop"
      >
        <i className="fa-solid fa-arrow-up" />
      </button>
    </div>
  );
}
