import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonItemDivider, IonLabel, IonPage, IonRow,
} from '@ionic/react';
import './Tab2.css';
import { heartHalfOutline } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
         <h2 className='section-head'>Gaming place  <IonIcon className='google' aria-hidden="true" icon={heartHalfOutline} /></h2>
        <IonGrid fixed={true}>
          <IonRow>
          <IonItemDivider className='color'>
            <h2 className='section'>Shooting games</h2>
          </IonItemDivider>
            <IonCol>
              <IonCard>
                <img className='card-image'
                  alt="Call of duty"
                  src="https://store-images.s-microsoft.com/image/apps.55183.14623575291286193.52ecceb7-ac9f-47e8-a29f-30ab63f33131.048bddb8-7ab3-4ba2-85b8-6acb95ee03b5"
                />
                <IonCardHeader>
                  <IonCardTitle className='hover'>Call of Duty Modern Warfare III</IonCardTitle>
                  <IonCardSubtitle className='price'>25.99€</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard>
                <img className='card-image'
                  alt="The Last of Us"
                  src="https://m.media-amazon.com/images/M/MV5BY2JiNjU3NWYtMTRlYS00NzY3LWE2NDQtZGFkNWE2MDU4OTExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
                <IonCardHeader>
                  <IonCardTitle className='hover'>The Last of Us</IonCardTitle>
                  <IonCardSubtitle className='price'>35.99€</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>

              </IonCard>
            </IonCol>
          </IonRow>

          <IonItemDivider className='color'>
            <h2 className='section'>Action games</h2>
          </IonItemDivider>

          <IonRow>
            <IonCol>
              <IonCard>
                <img className='card-image'
                  alt="Grand Theft Auto V"
                  src="https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/V.jpg"
                />
                <IonCardHeader>
                  <IonCardTitle className='hover'>Grand Theft Auto V</IonCardTitle>
                  <IonCardSubtitle className='price'>39.99€</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard>
                <img className='card-image'
                  alt="Assassin's Creed Shadows"
                  src="https://upload.wikimedia.org/wikipedia/en/5/54/Assassin%27s_Creed_Shadows_cover.png"
                />
                <IonCardHeader>
                  <IonCardTitle className='hover'>Assassin's Creed Shadows</IonCardTitle>
                  <IonCardSubtitle className='price' >29.99€</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonItemDivider className='color'>
            <h2 className='section'>Marvel games</h2>
          </IonItemDivider>

          <IonRow>
            <IonCol>
              <IonCard>
                <img className='card-image'
                  alt="Iron-Man"
                  src="https://image.api.playstation.com/vulcan/img/rnd/202010/2716/8pc2fi23ksuIvi0gEHO5EqV2.png"
                />
                <IonCardHeader>
                  <IonCardTitle className='hover'>Iron-Man</IonCardTitle>
                  <IonCardSubtitle className='price'>39.99€</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol> <IonCard>
              <img className='card-image'
               alt="Spider-Man" src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/PRfYtTZQsuj3ALrBXGL8MjAH.jpg" />
              <IonCardHeader>
                <IonCardTitle className='hover'>Spider-Man:Miles Morales</IonCardTitle>
                <IonCardSubtitle className='price'>45.95€</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent></IonCardContent>
            </IonCard></IonCol>
          </IonRow>

          <IonItemDivider className='color'>
            <h2 className='section'>Simulation games</h2>
          </IonItemDivider>

          <IonRow>
            <IonCol> <IonCard>
            <img className='card-image'
            alt='Ets2' src='https://m.media-amazon.com/images/I/81RtSJLoAXL._SL1500_.jpg'/>
            <IonCardHeader>
            <IonCardTitle className='hover'>Euro Truck Simulator 2</IonCardTitle>
            <IonCardSubtitle className='price'>35.95€</IonCardSubtitle>
            </IonCardHeader>
            </IonCard>

            </IonCol>
            <IonCol>
              <IonCard>
                <img src="https://cdn1.epicgames.com/spt-assets/416837697afc4fc78afcc57963d5a6df/farming-simulator-25-vow90.jpg" alt="fs25" />
                <IonCardHeader>
                  <IonCardTitle className='hover'>Farming Simulator 25</IonCardTitle>
                  <IonCardSubtitle className='price'>50.95€</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
