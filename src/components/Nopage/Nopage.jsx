const NoPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-96 p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-red-500">
          404 - Page Not Found
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600">
          The page tried hiding from you, but you found it anyway. Nice detective
          skills!
        </p>
        <button className="blueShadow relative overflow-hidden m-[30px] px-5 py-2 group rounded-full bg-white text-slate-950">
          <a href="/">
            <div className="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
            <h4 className="relative z-9">Home page</h4>
          </a>
        </button>
      </div>
    );
  };
  
  export default NoPage;
  