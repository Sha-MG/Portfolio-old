import './styles.scss'

const Footer = () => {

  return(
    <div className='footer'>
      <div className='footer--left'>
        <p>Portfolio de Morgane Gamory</p>
        <p>Toutes les illustrations et le code de cette page sont fait maison avec <i className="fa-solid fa-heart"></i>.</p>
        <p>Tous droits réservés © 2023</p>
      </div>
      <div className='footer--right'>
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
      </div>
    </div>
  )


}

export default Footer ;
