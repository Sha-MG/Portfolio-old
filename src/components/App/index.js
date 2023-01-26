// == Import
import TopPart from "../TopPart";
import { ParallaxProvider } from "react-scroll-parallax";
import Parcours from "../Parcours";
import Projets from "../Projets";

// == Composant
function App() {
  return (
        
    <>
     <ParallaxProvider>
        <TopPart/>
        <Parcours/>
      </ParallaxProvider>
      <Projets/>
    </>

  );
}

// == Export
export default App;
