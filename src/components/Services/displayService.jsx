import bun from "../../assets/bun.png";

const DisplayService = () => {
  const services = [
    {
      id:1,
      title: "Full Stack Web Development",
      description: "Description for Service 1",
      imageSrc: bun,
      link: "service/webdev",
    },
    {
      id:2,
      title: "Video and Photo Editing",
      description: "Description for Service 2",
      imageSrc: bun,
      link: "service/editings",
    },
    {
      id:3,
      title: "Data Analysis",
      description: "Description for Service 2",
      imageSrc: bun,
      link: "service/data-analysis",
    },
    {
      id:4,
      title: "SEO optimization",
      description: "Description for Service 2",
      imageSrc: bun,
      link: "service/seo",
    },
  ];
  return (
    <div>
      <div>
        <section className="pt-24 flex flex-col gap-24" id="services">
          <div className="flex flex-col gap-2 text-center">
            <h6 className="text-large sm:text-xl md:text-2xl">Services</h6>
            <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
              I <span className="poppins text-violet-400">offer</span> as a
              freelancer.
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-10">
            {services.map((service, index) => (
              <a key={index} href={`${service.link}`}>
                <div className="bg-gray-800 p-4 rounded-md h-auto">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-56 object-cover"
                  />
                  <h3 className="text-purple-300 text-2xl font-bold my-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">Know more...</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DisplayService;
