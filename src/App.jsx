import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="projects"><Projects /></section>
      <section id="about"><About /></section>
      <section id="team"><Team /></section>
      <section id="blog"><Blog /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
