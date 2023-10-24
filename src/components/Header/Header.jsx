const Head = () => {
  const tabs = [
    { name: "About me", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    // { name: "Blog", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  ];
  
  return (
    <header
      className="sticky content z-10 top-0 duration-200 px-6 flex items-center justify-between border-b border-solid py-6 bg-transparent border-transparent"
    >
      <div className="flex items-center">
        <img src="/amit_logo.png" width="30" className="mx-1" alt="AJ-Logo" />
        <h1 className="bg font-extrabold">
          <a href="#">
            <b className="font-bold">Amit</b> <span className="">Acharya</span>
          </a>
        </h1>
      </div>
      <div className="sm:flex items-center gap-4 hidden">
        {tabs.map((tab, index) => (
          <a
            key={index}
            href={tab.link}
            className="duration-200 hover:text-violet-400"
            target={tab.name === "Blog" ? "_blank" : ""}
            rel="noopener noreferrer"
          >
            <p>{tab.name}</p>
          </a>
        ))}
        <button className="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
          <a href="#contact">
            <div className="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
            <h4 className="relative z-9">Get in touch</h4>
          </a>
        </button>
      </div>
    </header>
  );
};

export default Head;
