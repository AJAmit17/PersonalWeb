import { LayoutGrid } from "../layout-grid";
import bun from "../../assets/bun.png"

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
        <h6 className="text-large sm:text-xl md:text-2xl">
          Services
        </h6>
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          I provide as <span className="poppins text-violet-400">A Freelancer</span>.
        </h3>
      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Full Stack Web Development
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Get comprehensive web development services covering front-end, back-end,
        and database management.
      </p>
      <button className="border border-violet-800 rounded-lg">
        <a className="px-8 py-4" href="service/webdev">
          Contact
        </a>
      </button>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Video and Photo Editing</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Professional editing services for videos and photos, ensuring
        high-quality results for your projects.
      </p>
      <button className="border border-violet-800 rounded-lg">
        <a className="px-8 py-4" href="service/webdev">
          Contact
        </a>
      </button>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        SEO optimization and WordPress
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Boost your website's visibility with SEO optimization and expert
        WordPress management services.
      </p>
      <button className="border border-violet-800 rounded-lg">
        <a className="px-8 py-4" href="service/webdev">
          Contact
        </a>
      </button>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Data Analysis</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Harness the power of data with our professional data analysis services
        for informed decision-making.
      </p>
      <button className="border border-violet-800 rounded-lg">
        <a className="px-8 py-4" href="service/webdev">
          Contact
        </a>
      </button>
    </div>
  );
};

const cards = [
  {
    id: 1,
    title : "Web development",
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title : "Web development",
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "https://media.istockphoto.com/id/1621380789/photo/young-editor-video-maker-edits-sound-tracks-for-movie.webp?b=1&s=170667a&w=0&k=20&c=FNqwMQVwL-6hHCRra0gFNAN10t-XbRAB5LTkszS0IP0=",
  },
  {
    id: 3,
    title : "Web development",
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://media.istockphoto.com/id/1152422375/photo/search-engine-marketing-concept.webp?b=1&s=170667a&w=0&k=20&c=8z6YRMJXXmNkXjNHco_5y_Aj9B2u7nhpmRaFYIWQlv0=",
  },
  {
    id: 4,
    title : "Web development",
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.webp?b=1&s=170667a&w=0&k=20&c=BNF7gZ3XmCEf0_H8bUb6TLOvrDPVOmrEzbuu8FZrOao=",
  },
];
