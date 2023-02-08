// Import
import './styles.scss';
import Presentation from './Presentation'
import Timeline from './Timeline'
import IconesContact from './Presentation/IconesContact';
// == Composant
function BlocParcours() {
  return (
    <>
    <div className='BlocParcours-container'>
      <div className='BlocParcours-container--div1'>
        <Presentation/>
        <Timeline/>
      </div>
    </div>
    </>
  );
}

// == Export
export default BlocParcours;
