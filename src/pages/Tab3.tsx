import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonThumbnail } from '@ionic/react';
import './Tab3.css';
import { gameControllerOutline, heartHalfOutline, searchCircle } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h2 className='ikona'><IonIcon  aria-hidden="true" icon={gameControllerOutline} /></h2>
        <IonSearchbar searchIcon={searchCircle} placeholder="Search"></IonSearchbar>

        <IonCard className='ion-card'>
      <IonCardHeader>
        <IonCardTitle className='title'>Your Wishlist</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img className='slika' alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel>Item</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img className='slika' alt="Silhouette of mountains" src="https://m.media-amazon.com/images/M/MV5BY2JiNjU3NWYtMTRlYS00NzY3LWE2NDQtZGFkNWE2MDU4OTExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" />
            </IonThumbnail>
            <IonLabel>The Last Of Us 29.99€</IonLabel>
            <IonLabel>Add To Cart <IonIcon  aria-hidden="true" icon={gameControllerOutline} /></IonLabel>
            {/* <IonLabel>Naughty Dog</IonLabel> */}
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img className='slika' alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel>Item</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img className='slika' alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel>Item</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

