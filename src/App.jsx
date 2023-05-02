import { Route, Routes } from "react-router-dom";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import Article from "./pages/Article";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
