const Projects = () => {
  const steps = [
    {
      name: "Flipkart Web Scrapping",
      description:
        "A data extraction initiative aimed at gathering product information, prices, and reviews from the Flipkart e-commerce platform for market analysis and research purposes.",
      githubLink: "https://github.com/AJAmit17/Flipkart_WebScrapping_",
      imageSrc: "https://th.bing.com/th/id/OIP.u0Pk-feV2uAMLCfcbXUVDwHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7", 
    },
    {
      name: "Blog App - Django",
      description:
        "A web application built using the Django framework for creating and managing blogs, allowing users to write, publish, and share their thoughts and articles online.",
      githubLink: "https://github.com/AJAmit17/django-app-ajblogs",
      imageSrc: "https://th.bing.com/th/id/OIP.u0Pk-feV2uAMLCfcbXUVDwHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7", 
    },
    {
      name: "Dimond Price Prediction",
      description:
        "A machine learning endeavor focused on predicting the prices of diamonds based on their various attributes, facilitating more accurate valuation and decision-making in the diamond market.",
      githubLink: "https://github.com/AJAmit17/DiamondPricePrediction",
      imageSrc: "https://th.bing.com/th/id/OIP.u0Pk-feV2uAMLCfcbXUVDwHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7", 
    },
    {
      name: "Namma Doctor",
      description:
        "A web application developed using Django to provide a platform for managing medical records, appointments, and healthcare information, offering a user-friendly solution for patients and healthcare professionals.",
      githubLink: "https://github.com/AJAmit17/NammaDoctor",
      imageSrc: "https://th.bing.com/th/id/OIP.u0Pk-feV2uAMLCfcbXUVDwHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7", 
    },
  ];

  return (
    <div>
      <section className="pt-24 flex flex-col gap-24" id="projects">
        <div className="flex flex-col gap-2 text-center">
          <h6 className="text-large sm:text-xl md:text-2xl">
            A few of my creative endeavors.
          </h6>
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Curious to <span className="poppins text-violet-400">see</span> my
            work?
          </h3>
        </div>
        <a
          href="https://github.com/AJAmit17"
          target="_blank"
          className="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github" />
          <p>CheckOut Github</p>
        </a>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-md">
              <img
                src={step.imageSrc}
                alt={step.name}
                className="w-full h-32 object-cover"
              />
              <h3 className="text-purple-300 text-2xl font-bold my-2">{step.name}</h3>
              <p className="text-gray-300">{step.description}</p>
              <a
                href={step.githubLink}
                target="_blank"
                className="mt-4 px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 hover:border-violet-700 duration-200"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github" />
                <p>Github Link</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
