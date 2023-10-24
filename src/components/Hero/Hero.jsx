const Hero = () => {
  return (
    <div>
      <section
        id="introPage"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 mt-4"
      >
        <div className="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
          <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
            Hi! <br />
            I'm <span className="poppins text-violet-400">Amit </span>Acharya
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl">
              Full Stack Developer
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl">
              & Aspiring Data Scientist
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl">
            My <span className="text-violet-400">favorite tech</span> includes
            Python, Django, Pandas, ReactJS, TailwindCSS and MongoDB!
          </p>
          <button className="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950">
            <a href="#contact">
              <div className="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
              <h4 className="relative z-9">Get in touch &rarr;</h4>
            </a>
          </button>
        </div>

        <div className="relative grid place-items-center">
          <img
            src={"/hero.svg"}
            alt="Developer"
            className="object-cover z-2 max-h-[70vh] bg-transparent"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
