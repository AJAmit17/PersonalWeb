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
      </div>
    );
  };
  
  export default NoPage;
  