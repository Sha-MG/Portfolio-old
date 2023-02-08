import './styles.scss'
import { bubble as Menu } from 'react-burger-menu'


const LilMenu = () => {

  return(
    <Menu>
        <a className="menu-item" href="#top">Acceuil</a>
        <a className="menu-item" href="#parcours">Parcours</a>
        <a className="menu-item" href="#projets">Projets</a>
        <a className="menu-item" href="#aboutMe">A propos</a>
        <a className="menu-item" href="#contact">Contact</a>
    </Menu>
  )
}

export default LilMenu;
