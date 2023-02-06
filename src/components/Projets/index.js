// Import
import './styles.scss';
import ProjetsList from './ProjetsList'
import projets from '../../data/projets'

// == Composant
function Projets() {

  return (
    <div className='container-projets'>
      <a href="#top" className='backUp backUp__projets'><i className="fa-solid fa-arrows-up-to-line fa-2xl"></i></a>
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
