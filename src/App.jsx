import Navbar from "./components/Navbar";
import ScrollButton from "./components/ScrollButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <ScrollButton />
      <Footer />
    </>
  );
}
