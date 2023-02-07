// Import
import './styles.scss';
import miniMePicture from 'src/assets/img/AnimationMiniMe.png';
import backgroundMiniMe from 'src/assets/img/fondTopPart.png';
import backgroundDotMiniMe from 'src/assets/img/fondDotTopPart.png';
import backgroundDotSecond from 'src/assets/img/fondDotSecond.png';
import backgroundDotThree from 'src/assets/img/fondDotThree.png';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';


// == Composant
function MiniMe() {
  const parallax = useParallax({
    speed: -10,
  });
  const parallaxtwoo = useParallax({
    speed:20,
  })
  const parallaxthree = useParallax({
    speed: -30,
  });


  return (
    <div className='miniMe-container'>

      <img ref={parallax.ref} src={backgroundDotMiniMe} className='miniMe-container--image miniMe-container--image--background'/>
      <img ref={parallaxthree.ref} src={backgroundDotThree} className='miniMe-container--image miniMe-container--image--background'/>
      <img ref={parallaxtwoo.ref} src={backgroundMiniMe} className='miniMe-container--image miniMe-container--image--background'/>
      <img src={miniMePicture} className='miniMe-container--image miniMe-container--image--animation'/>
    </div>
  );
}

// == Export
export default MiniMe;
