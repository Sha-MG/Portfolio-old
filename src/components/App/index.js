// == Import
import TopPart from "../TopPart";
import { ParallaxProvider } from "react-scroll-parallax";
import Parcours from "../Parcours";
import Projets from "../Projets";
import AboutMe from "../AboutMe";
import Contact from "../Contact";

// == Composant
function App() {
  return (
        
    <>
     <ParallaxProvider>
        <TopPart/>
        <Parcours/>
      </ParallaxProvider>
      <Projets/>
      <AboutMe/>
      <Contact/>
    </>

  );
}

// == Export
export default App;
