// Import
import './styles.scss';

// == Composant
function IconesContact() {  
  return(
    
  <div className='contactContainer'>
    <ul className="wrapper">
      <li className="icon linkedin">
        <a href="https://www.linkedin.com/in/morgane-gamory" target="_blank">
          <span className="tooltip">LinkedIn</span>
          <span><i className="fa-brands fa-linkedin fa-xl"></i></span>
        </a>
      </li>
      <li className="icon github">
        <a href="https://github.com/Sha-MG" target="_blank">
          <span className="tooltip">Github</span>
          <span><i className="fa-brands fa-github fa-xl"></i></span>
        </a>
      </li>
      <li className="icon mail">
        <a href="#contact">
          <span className="tooltip">Email</span>
          <span><i className="fa-solid fa-envelope fa-xl"></i></span>
        </a>
      </li>
    </ul>
  </div>

  )
}

// == Export
export default IconesContact;
