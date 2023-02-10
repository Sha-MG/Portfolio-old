// Import
import './styles.scss';
import Typed from 'typed.js';
import React from 'react';
// == Composant
function Title() {
  
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        ' Junior',
        ' FrontEnd',
        ' Padawan',
        ' Passionnée',
        ' FullStack',
        ' En recherche de Stage',
        ' Motivée',
        ' React',
        ' Créative'
      ],
      typeSpeed: 40,
      backSpeed: 90,
      loop: true,
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <div className='title-top'>
      <h1 className='title-top--name'>Morgane Gamory</h1>
      <h2 className='title-top--dev'>Développeuse Web <span style={{ whiteSpace: 'pre' }} ref={el} /></h2>
    </div>
  );
}

// == Export
export default Title;
