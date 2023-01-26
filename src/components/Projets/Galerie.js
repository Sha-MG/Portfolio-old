import Slider from 'react-slick';

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
      style={{ ...style, display: "block", left:"-55px", transform: "scale(4)" }}
      onClick={onClick}
    />
  );
}

function Galerie({isOpen, closeModal, galerie}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    };

  return (
    <div className={`modal ${isOpen ? 'open modal' : 'closed modal'}`}>
      <div className="modal-content">
      <button onClick={closeModal} className='modal--bouttonClose'><i className="fa-solid fa-xmark"></i></button>
        <Slider {...settings} className='modal--slider'>
          {
            galerie.map((img) => (
              <img src={img} key={img}/>
            ))
          }

        </Slider>
      </div>
    </div>
  );
}

export default Galerie ;
