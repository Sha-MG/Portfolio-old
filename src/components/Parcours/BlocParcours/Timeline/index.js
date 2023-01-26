// Import
import './styles.scss';
import ListTimeline from './listTimeline';
import timeline from '../../../../data/timeline';

// == Composant
function Timeline() {

  return (
    <div className='BlocParcours-container--timeline'>
      <ul id='timeline'>
       {
          timeline.map((node) => (
            <ListTimeline
              key={node.name}
              {...node}
            />
          ))
        }
      </ul>
    </div>
  );
}

// == Export
export default Timeline;
