// Import
import './styles.scss';
import TechnoList from './TechnoList'
import Galerie from './Galerie';

import { useState } from 'react';

// == Composant
function ProjetsList({name, img, description, technos, github, lien, galerie}) {

  const [modalOpen, setModalOpen] = useState(false);

  return (

    <>
{/* La galerie correspond a la modal qui s'ouvre lorsqu'on veux voir plus de photos du projet */}
      <Galerie 
      isOpen={modalOpen} 
      closeModal={() => setModalOpen(false)}
      galerie={galerie}
      />
{/* Container global de la carte */}
      <div className='container-projets--cardsboard' >
        <div className='container-projets--cardsboard--card'>
{/* Les élements au dos de la carte */}
        <div className="container-projets--cardsboard--card__side container-projets--cardsboard--card__side--back">
{/* Titre du dos de la carte avec la ligne en biais */}
          <div className="container-projets--cardsboard--card__cover">
            <h4 className="container-projets--cardsboard--card__heading">
            <span className="container-projets--cardsboard--card__heading-span">{name}</span>
            </h4>
          </div>
{/* Listing des caractéristiques du projet */}
          <div className="container-projets--cardsboard--card__details">
            <ul>
              <li>{description}</li>
              <li className='technos'>
              {
                technos.map((tec) => (
                  <TechnoList
                    key={(Date.now())*(Math.random())}
                    techno={tec}
                  />
                ))
                }
              </li> 
              <li className='container-projets--cardsboard--card__containerBouttonGalerie'>
                <button onClick={() => setModalOpen(true)} className='container-projets--cardsboard--card__bouttonGalerie'>Galerie</button>
                <a href={github} target='_blank' className='container-projets--cardsboard--card__bouttonGalerie'>Github</a>
{/* Si il y a un lien vers le site on le met */}
                { lien != '' &&
                <a href={lien} target='_blank' className='container-projets--cardsboard--card__bouttonGalerie'>Site Web</a>
                }
                 </li>
            </ul>
          </div>
        </div>
{/* Les élements du devant de la carte */}
        <div style={{backgroundImage:`url(${img})`}} className={'container-projets--cardsboard--card__side container-projets--cardsboard--card__side--front ' + name.toLowerCase()}>
        </div>
      </div>
    </div>
  </>
  );
}

// == Export
export default ProjetsList;
