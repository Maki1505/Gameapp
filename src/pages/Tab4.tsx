import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import { cartOutline, chevronBackOutline, gameControllerOutline, trashOutline } from 'ionicons/icons';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <h2 className='ikona'><IonIcon aria-hidden="true" icon={gameControllerOutline} /></h2>
      </IonHeader>
      <IonContent fullscreen>

        <IonButton color={"secondary"} className='item-btn'><IonIcon className='icon-arrow' aria-hidden="true" icon={chevronBackOutline} />Your Cart <span>(4 items)</span></IonButton>

        <IonCard>
          <IonCardContent>
            <IonList className='ion-card'>
              <IonItem>
                <IonThumbnail slot="start">
                  <img className='slika' alt="Grand Theft Auto V" src="https://image.api.playstation.com/vulcan/img/rnd/202010/2716/8pc2fi23ksuIvi0gEHO5EqV2.png" />
                </IonThumbnail>
                <IonLabel>Iron Man</IonLabel>
                <IonLabel className='cart-text'>15.99€  <IonIcon className='trash' aria-hidden="true" icon={trashOutline} /></IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img className='slika' alt="The Last Of Us" src="https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/V.jpg" />
                </IonThumbnail>
                <IonLabel>Grand Theft Auto V</IonLabel>
                <IonLabel className='cart-text'>25.99€ <IonIcon className='trash' aria-hidden="true" icon={trashOutline} /></IonLabel>
                {/* <IonLabel>Naughty Dog</IonLabel> */}
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img className='slika' alt="Iron Man" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD82iKjtK-DZpTQUt_49KpVFGlbSBKEBgzLg&s" />
                </IonThumbnail>
                <IonLabel>Elden Ring</IonLabel>
                <IonLabel className='cart-text'>39.99€ <IonIcon className='trash' aria-hidden="true" icon={trashOutline} /></IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img className='slika' alt="Elden Ring" src="https://m.media-amazon.com/images/M/MV5BY2JiNjU3NWYtMTRlYS00NzY3LWE2NDQtZGFkNWE2MDU4OTExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" />
                </IonThumbnail>
                <IonLabel>The Last Of Us</IonLabel>
                <IonLabel className='cart-text'>29.99€ <IonIcon className='trash' aria-hidden="true" icon={trashOutline} /></IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonItem color={"medium"} className='discount'>
          <IonInput className='discount-code' label="Enter Discount Code:"></IonInput>
        </IonItem>

        <hr style={{ border: 'none', borderTop: '2px solid #ccc', margin: '1rem 1rem', color: '' }} />
        <p className='price-total'>Total:<span className='totala'>111.96€</span></p>

        <IonButton color={"secondary"} className='item-btn'>Checkout Now</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Tab4;
