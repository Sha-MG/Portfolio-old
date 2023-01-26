// Import
import './styles.scss';
import NavBar from './NavBar'
import MiniMe from './MiniMe'
import Title from './Title';

// == Composant
function TopPart() {
  return (
    <>
      <NavBar/>
      <div className='top-container'>
        <MiniMe/>
        <Title/>
      </div>
    </>
  );
}

// == Export
export default TopPart;
