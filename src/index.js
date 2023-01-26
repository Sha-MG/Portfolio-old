// Import : npm
import { createRoot } from 'react-dom/client';

// Import : local
// Composants
import App from 'src/components/App';

// Render
const rootReactElement = <App />;
const root = createRoot(document.getElementById('root'));

// Déclenchement du rendu 
root.render(rootReactElement);
