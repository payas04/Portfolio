import "./App.css";
import { Education } from "./components/Education";
import { Home } from "./components/Home";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
function App() {
  return (
    <div className="bg-[url('/bg.jpg')] bg-repeat bg-contain min-h-screen">
      <Navbar />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
