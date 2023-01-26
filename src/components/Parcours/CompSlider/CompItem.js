import PropTypes from 'prop-types';
import './styles.scss';




const CompItem = ({name, icone}) => (
  <div className='CompSlider-container--icone'>
    <img  src={icone}/>
    <p>{name}</p>
  </div>
);

CompItem.propTypes = {
  name: PropTypes.string.isRequired,
  icone: PropTypes.string.isRequired,
};

export default CompItem;
