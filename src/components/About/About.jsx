const About = () => {
  const benefits = [
    {
      name: "A CSE-Data Science Student",
      description:
        "I'm currently a second-year Computer Science and Data Science student, gaining knowledge in various data science techniques, algorithms, and data analysis tools.",
    },
    {
      name: "A Full-Stack Developer",
      description:
        "I'm also a full-stack developer, proficient in a wide range of technologies, from front-end development with HTML, CSS, and JavaScript to back-end programming, enabling me to create comprehensive online solutions.",
    },
    {
      name: "An Aspiring Data Scientist",
      description:
        "As an aspiring data scientist, I'm passionate about leveraging data to gain insights and solve complex problems. I'm continuously developing my skills in data analysis, machine learning, and AI.",
    },
  ];

  return (
    <div>
      <section
        id="about"
        className=" pt-24 lg:pt-32 flex flex-col gap-4 sm:gap-20 md:gap-12 relative"
      >
        <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
          <h6 className="text-large sm:text-xl md:text-2xl">
            Want to know more?
          </h6>
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            A bit <span className="poppins text-violet-400">about</span> me.
          </h3>
        </div>
        <p className="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
          I am . . .
        </p>
        <div className="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
          {benefits.map((benefit, index) => (
            <div className="flex gap-6 sm:gap-8" key={index}>
              <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                0{index + 1}
              </p>
              <div className="flex flex-col gap-6 sm:gap-8">
                <h3 className="text-2xl sm:text-3xl md:text-5xl">
                  {benefit.name}
                </h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
