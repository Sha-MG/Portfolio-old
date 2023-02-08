// Import
import './styles.scss';
import IconesContact from './IconesContact'
import HoverBurst from './hoverBurst';
// == Composant
function Presentation() {
  return (

    <>
      <a href="#top" className='backUp'><i className="fa-solid fa-arrows-up-to-line fa-2xl"></i></a>
      <div className='BlocParcours-container--presentation'>
        <p>Salut, je m'appelle Morgane, <br/> </p>
        <p> <br/>Je suis officiellement <HoverBurst><strong>développeuse web & mobile</strong></HoverBurst> depuis quelques mois.</p>
        <p>J'ai un parcours plutôt <HoverBurst><strong>atypique</strong></HoverBurst>, qui m'a permis d'acquérir des connaissances dans des domaines très différents les uns des autres. </p>
        <br/><p>Le design Web, la psychologie, le développement web, l'auto-entreprenariat, sont autant de cordes à mon arc qui me rendent aujourd'hui très <HoverBurst><strong>polyvalente. </strong></HoverBurst>
        Le point commun à toutes ces expériences c'est <HoverBurst><strong>l'interaction</strong></HoverBurst> avec autrui, qu'elle soit visuelle ou non. Susciter une émotion, produire quelque chose de beau, intéragir en direct ou via un support, c'est ça que je recherche principalement.</p>
        <br/><p><HoverBurst><strong>Apprendre</strong></HoverBurst> de nouvelles choses ne me fait pas peur, je dirai même que j'adore ça ! Je suis <HoverBurst><strong>curieuse</strong></HoverBurst>, et chaque petit problème est un challenge qui me donne envie de me dépasser pour le résoudre.</p>
        <p>Pour finir, la <HoverBurst><strong>créativité</strong></HoverBurst> est au centre de toutes mes activités professionnelles et personnelles. L'imagination et l'art sont des composantes essentielles de mon quotidien. </p>
        <p><br/>Si mon profil vous intéresse, que vous avez une question, ou même que vous voulez me dire deux mots sur votre artiste favori, n'hésitez pas à  me contacter ! </p>
      
      <IconesContact/>
      </div>
    </>
  )
}

// == Export
export default Presentation;
