import { FaGithub } from "react-icons/fa";
import CenterContent from "../layout/CenterContent";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-light mt-auto">
      <CenterContent>
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-semibold font-newsreader">Spotlight</h2>
          <p>Powered by News API</p>
          <FaGithub className="text-3xl" />
        </div>
      </CenterContent>
    </footer>
  );
};

export default Footer;
