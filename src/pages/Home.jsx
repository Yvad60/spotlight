import Hero from "../components/sections/Hero";
import MoreNews from "../components/sections/MoreNews";

const Home = () => {
  return (
    <main className="text-yellow-950 bg-light flex-1 flex flex-col">
      <Hero />
      <MoreNews />
    </main>
  );
};

export default Home;
