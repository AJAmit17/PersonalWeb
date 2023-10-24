import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/Main/MainPage";
import Scrolltop from "./components/Scrolltop";

// eslint-disable-next-line react/prop-types
function Application({ goTop, showScrollButton}) {
  return (
    <div className="container relative flex flex-col max-w-[1440px] mx-auto w-full text-sm sm:text-base min-h-screen">
      <Header />
      <MainPage />
      <Footer />
      <Scrolltop goTop={goTop} showScrollButton={showScrollButton} />
    </div>
  );
}

export default Application;