// Import
import './styles.scss';
import CompItem from './CompItem';
import competences from 'src/data/competences.js';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",right:"-55px", transform: "scale(4)" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",left:"-55px", transform: "scale(4)" }}
      onClick={onClick}
    />
  );
}

// == Composant
function CompSlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrow:true,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

  return (
    <div className='CompSlider-container'> 
       <Slider {...settings}>
        {
          competences.map((comp) => (
            <CompItem
              key={comp.name}
              {...comp}
            />
          ))
        }
        </Slider>
    </div>
  );
}

// == Export
export default CompSlider;
