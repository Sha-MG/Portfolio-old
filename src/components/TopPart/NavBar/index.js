// Import
import './styles.scss';
import logo from 'src/assets/img/logo.png'

// == Composant
function NavBar() {
  return (
    <div className='nav-element' id='top'>
      <div className='nav-element--left'>
        <img src={logo} alt="Home" className='nav-element--logo'/>
      </div>
      {/* <div className='nav-element--right'>
        <a href='#timeline' className='nav-element--links'>Parcours</a>
        <a href='#projets' className='nav-element--links'>Projets</a>
        <a href='#aboutMe' className='nav-element--links'>A propos</a>
        <a href='#contact' className='nav-element--links'>Contact</a>
      </div> */}
    </div>
  );
}

// == Export
export default NavBar;
