import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/Main/MainPage";
import Scrolltop from "./components/Scrolltop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/Nopage/Nopage";
import Webdev from "./components/Services/webdev";
import Editing from "./components/Services/editings";
import Datalysis from "./components/Services/data-analysis";
import Seo from "./components/Services/seo";
import { motion, useScroll, useSpring } from "framer-motion";

// eslint-disable-next-line react/prop-types
function Application({ goTop, showScrollButton }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="container relative flex flex-col max-w-[1440px] mx-auto w-full text-sm sm:text-base min-h-screen">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NoPage />} />
            <Route path="service/webdev" element={<Webdev />} />
            <Route path="service/editings" element={<Editing />} />
            <Route path="service/data-analysis" element={<Datalysis />} />
            <Route path="service/seo" element={<Seo />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        <Scrolltop goTop={goTop} showScrollButton={showScrollButton} />
      </div>
    </>
  );
}

export default Application;
