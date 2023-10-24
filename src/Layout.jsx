import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/Main/MainPage";

function Application() {
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Use state to track when to show the scroll-to-top button
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Add an event listener to check for scrolling
  const handleScroll = () => {
    if (window.scrollY > 100) {
      // Show the button when the user has scrolled down 100px
      setShowScrollButton(true);
    } else {
      // Hide the button if the user is at the top of the page
      setShowScrollButton(false);
    }
  };

  // Attach the scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container relative flex flex-col max-w-[1440px] mx-auto w-full text-sm sm:text-base min-h-screen">
      <div
        className={`fixed-button fixed bottom-10 right-10 z-10 opacity-0 pointer-events-none transition-opacity duration-200 ${
          showScrollButton ? "opacity-100 pointer-events-auto" : ""
        }`}
      >
        <button
          onClick={goTop}
          className="rounded-full bg-slate-900 text-violet-400 px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"
        >
          <i className="fa-solid fa-arrow-up" />
        </button>
      </div>
      <Header />
        <MainPage />
      <Footer />
    </div>
  );
}

export default Application;
