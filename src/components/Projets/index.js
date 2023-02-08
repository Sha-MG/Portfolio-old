// Import
import './styles.scss';
import ProjetsList from './ProjetsList'
import projets from '../../data/projets'

// == Composant
function Projets() {

  return (
    <div className='container-projets'>
      <h2 id='projets'>Projets</h2>
      <div className='container-projets--list'>
      {
          projets.map((projet) => (
            <ProjetsList
              key={projet.name}
              {...projet}
            />
          ))
        }
      </div>
    </div>
  );
}

// == Export
export default Projets;
