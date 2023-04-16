import Hero from "./components/sections/Hero";
import MoreNews from "./components/sections/MoreNews";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";

const App = () => {
  return (
    <main className="text-yellow-950 bg-light">
      <Navbar />
      <Hero />
      <MoreNews />
      <Footer />
    </main>
  );
};

export default App;
