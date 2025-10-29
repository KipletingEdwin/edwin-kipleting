import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default App;
