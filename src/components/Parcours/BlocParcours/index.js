// Import
import './styles.scss';
import Presentation from './Presentation'
import TImeline from './Timeline'

// == Composant
function BlocParcours() {
  return (
    <div className='BlocParcours-container'>
      <Presentation/>
      <TImeline/>
    </div>
  );
}

// == Export
export default BlocParcours;
