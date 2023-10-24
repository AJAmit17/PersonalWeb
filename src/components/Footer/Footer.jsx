const Footer = () => {
  return (
    <footer className="py-20 sm:py-32 bg-transparent border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p>
          <b className="pr-2">Email:</b>amitjagadeesh2004@gmail.com
        </p>
        <p>
          <b className="pr-2">LinkedIn</b>
          <a
            href="https://www.linkedin.com/in/amit-acharya17/"
            target="_blank"
            className="text-violet-400"
            rel="noreferrer"
          >
            Amit Acharya
            <sup>
              <span className="text-xs scale-75 pl-0.5">
                <i className="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]" />
              </span>
            </sup>
          </a>
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/AJAmit17"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <i className="fa-brands fa-github text-2xl text-violet-400" />
          </a>
          <a
            href="https://twitter.com/Amit10225527"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <i className="fa-brands fa-x-twitter text-2xl text-violet-400" />
          </a>
          <a
            href="https://www.instagram.com/ajamit_17/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram text-2xl text-violet-400" />
          </a>
          <a
            href="https://www.facebook.com/amit.achari.3150"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook text-2xl text-violet-400" />
          </a>
        </div>
        <p className="text-sm text-center">
          &copy; 2023 Amit Acharya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
