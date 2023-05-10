import { FaGithub } from "react-icons/fa";
import CenterContent from "../layout/CenterContent";

const Footer = () => {
  return (
    <footer className="py-8 mt-auto bg-primary text-light">
      <CenterContent>
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
          <h2 className="text-3xl font-semibold md:text-4xl font-newsreader">Spotlight</h2>
          <p className="text-base">
            Powered by
            <a
              href="https://newsapi.org/"
              rel="noreferrer"
              className="ml-1 underline underline-offset-2"
              target="_blank"
            >
              News API
            </a>
          </p>
          <a href="https://github.com/Yvad60/spotlight" target="_blank" rel="noreferrer">
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </CenterContent>
    </footer>
  );
};

export default Footer;
