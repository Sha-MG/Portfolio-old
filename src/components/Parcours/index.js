// Import
import './styles.scss';
import CompSlider from './CompSlider'
import BlocParcours from './BlocParcours';

// == Composant
function Parcours() {

  return (
    <>
      <a href="#top" className='backUp backUp__parcours'><i className="fa-solid fa-arrows-up-to-line fa-2xl"></i></a>
      <CompSlider/>
      <BlocParcours/>
    </>
  );
}

// == Export
export default Parcours;
