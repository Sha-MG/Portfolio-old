import './styles.scss'
import { bubble as Menu } from 'react-burger-menu'


const LilMenu = () => {

  return(
    <Menu>
        <a className="menu-item" href="#top"><i className="fa-solid fa-house"></i> Acceuil</a>
        <a className="menu-item" href="#parcours"><i class="fa-solid fa-road"></i> Parcours</a>
        <a className="menu-item" href="#projets"><i class="fa-solid fa-diagram-project"></i> Projets</a>
        <a className="menu-item" href="#aboutMe"><i class="fa-solid fa-palette"></i> A propos</a>
        <a className="menu-item" href="#contact"><i class="fa-regular fa-paper-plane"></i> Contact</a>
    </Menu>
  )
}

export default LilMenu;
