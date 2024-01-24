import ServiceLayout from "./ServiceLayout";
import bun from "../../assets/bun.png";

const Seo = () => {
  return (
    <ServiceLayout>
      <div className="flex flex-col md:flex-row items-center justify-center h-96 p-4">
        <img
          src={bun}
          alt="data analysis"
          className="w-full md:w-1/3 h-32 md:h-auto object-cover md:mr-4"
        />
        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold text-purple-300 my-2">
            Data Analysis
          </h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            maxime quaerat placeat quibusdam minima, quo iste autem dicta
            delectus rem, accusantium maiores sequi! Nulla fugiat quaerat,
            cumque nemo eius necessitatibus sint reiciendis magni in, id modi.
            Laboriosam nisi voluptatum perferendis iure quibusdam cupiditate
            dolor doloribus?
          </p>
          <button className="mt-4 px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 hover:border-violet-700 duration-200">
            <i className="fa-solid fa-message" />
            <span>Contact Me</span>
          </button>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Seo;
