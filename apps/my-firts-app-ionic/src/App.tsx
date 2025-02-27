import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, camera } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Camera from './pages/Camera';
import Gallery from './pages/Gallery';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/camera">
                        <Camera />
                    </Route>
                    <Route exact path="/gallery">
                        <Gallery />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/camera" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="camera" href="/camera">
                        <IonIcon aria-hidden="true" icon={camera} />
                        <IonLabel>Camera</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="gallery" href="/gallery">
                        <IonIcon icon={images} />
                        <IonLabel>Gallery</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
