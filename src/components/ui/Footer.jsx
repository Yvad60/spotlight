import { FaGithub } from "react-icons/fa";
import CenterContent from "../layout/CenterContent";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-light mt-auto">
      <CenterContent>
        <div className="flex flex-col gap-5 md:flex-row md:gap-0 justify-between items-center">
          <h2 className="text-3xl md:text-4xl font-semibold font-newsreader">Spotlight</h2>
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
