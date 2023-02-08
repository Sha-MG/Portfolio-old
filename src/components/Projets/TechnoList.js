// Import
import './styles.scss';

// == Composant
function TechnoList(techno) {

  return (
      <>
      <p>{techno.techno}</p>
      <span className='span-round'></span>
      </>
  );
}

// == Export
export default TechnoList;
