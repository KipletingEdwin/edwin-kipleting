import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
    </>
  );
}

export default App;
