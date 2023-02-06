import dog from '../../assets/img/dog.png'
import unicorn from '../../assets/img/unicorn.png'
import ordi from '../../assets/img/ordi.png'
import peinture from '../../assets/img/peinture.png'
import jvd from '../../assets/img/jvd.png'
import './styles.scss'

const AboutMe = () => {

  return (
    <div className='aboutme--container'>
      <h2 id='aboutMe'>About me</h2>
      <a href="#top" className='backUp backUp__aboutme'><i className="fa-solid fa-arrows-up-to-line fa-2xl"></i></a>
      <div className='aboutme--img-container'>
        <img src={dog}/>
        <img src={jvd}/>
        <img src={peinture}/>
        <img src={ordi}/>
        <img src={unicorn}/>
      </div>
    </div>

  )
}

export default AboutMe;
