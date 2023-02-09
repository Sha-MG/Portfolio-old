import dog from '../../assets/img/dog.png'
import unicorn from '../../assets/img/unicorn.png'
import ordi from '../../assets/img/ordi.png'
import peinture from '../../assets/img/peinture.png'
import jvd from '../../assets/img/jvd.png'
import './styles.scss'

const AboutMe = () => {

  return (
    <div className='aboutme--container'>
      <h2 id='aboutMe'>A propos</h2>
      <div className='aboutme--img-container'>
        <img src={dog}/>
        <img src={ordi}/>
        <img src={peinture}/>
        <img src={jvd}/>
        <img src={unicorn}/>
      </div>
    </div>

  )
}

export default AboutMe;
