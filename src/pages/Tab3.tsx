import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonThumbnail } from '@ionic/react';
import './Tab3.css';
import { cartOutline, gameControllerOutline, heartHalfOutline, searchCircle } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h2 className='ikona'><IonIcon aria-hidden="true" icon={gameControllerOutline} /></h2>
        <IonSearchbar searchIcon={searchCircle} placeholder="Search"></IonSearchbar>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle className='title'>Your Wishlist</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList className='ion-card'>
              <IonItem>
                <IonThumbnail slot="start">
                  <img className='slika' alt="Grand Theft Auto V" src="https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/V.jpg" />
                </IonThumbnail>
                <IonLabel>Grand Theft Auto V 25.99€</IonLabel>
                <IonLabel className='cart-text'>Add To Cart  <IonIcon aria-hidden="true" icon={cartOutline} /></IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img className='slika' alt="The Last Of Us" src="https://m.media-amazon.com/images/M/MV5BY2JiNjU3NWYtMTRlYS00NzY3LWE2NDQtZGFkNWE2MDU4OTExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" />
                </IonThumbnail>
                <IonLabel>The Last Of Us 29.99€</IonLabel>
                <IonLabel className='cart-text'>Add To Cart <IonIcon aria-hidden="true" icon={cartOutline} /></IonLabel>
                {/* <IonLabel>Naughty Dog</IonLabel> */}
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img className='slika' alt="Iron Man" src="https://image.api.playstation.com/vulcan/img/rnd/202010/2716/8pc2fi23ksuIvi0gEHO5EqV2.png" />
                </IonThumbnail>
                <IonLabel>Iron Man 15.99€</IonLabel>
                <IonLabel className='cart-text'>Add To Cart <IonIcon aria-hidden="true" icon={cartOutline} /></IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img className='slika' alt="Elden Ring" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD82iKjtK-DZpTQUt_49KpVFGlbSBKEBgzLg&s" />
                </IonThumbnail>
                <IonLabel>Elden Ring 39.99€€</IonLabel>
                <IonLabel className='cart-text'>Add To Cart <IonIcon aria-hidden="true" icon={cartOutline} /></IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
