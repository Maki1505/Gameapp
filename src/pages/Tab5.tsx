import {
  IonButton,
  IonIcon,
  IonContent,
  IonPage,
  IonItemDivider,
  IonList,
  IonLabel,
  IonItem,
} from '@ionic/react';
import './Tab5.css';
import { analyticsOutline, cardOutline, fingerPrintOutline, headsetOutline, languageOutline, logoFacebook, logoGoogle, notifications, notificationsCircle, notificationsCircleOutline, receiptOutline } from 'ionicons/icons';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h2>Gaming place</h2>

        <IonButton color="white" className="google-btn">
          <IonIcon aria-hidden="true" icon={logoGoogle} /> Sign in with Google
        </IonButton>
        <IonButton className="facebook-btn">
          <IonIcon aria-hidden="true" icon={logoFacebook} /> Sign in with Facebook
        </IonButton>

        <IonItemDivider className='buy'>Buying</IonItemDivider>

      <IonList className="first-list">
  <IonItem>
    <IonIcon aria-hidden="true" icon={receiptOutline} />
    <IonLabel>Orders</IonLabel>
  </IonItem>
  <IonItem>
    <IonLabel></IonLabel>
  </IonItem>
</IonList>


        <IonList className="second-list" lines="none">
          <IonItem>
            <IonLabel>Notification</IonLabel>
            <IonIcon aria-hidden="true" icon={notificationsCircleOutline}/>
          </IonItem>
          <IonItem>
            <IonLabel>Privacy & security</IonLabel>
            <IonIcon aria-hidden="true" icon={fingerPrintOutline}/>
          </IonItem>
          <IonItem>
            <IonLabel>Activity log</IonLabel>
            <IonIcon aria-hidden="true" icon={analyticsOutline}/>
          </IonItem>
          <IonItem>
            <IonLabel>Language and region</IonLabel>
            <IonIcon aria-hidden="true" icon={languageOutline}/>
          </IonItem>
          <IonItem>
            <IonLabel>Payment information</IonLabel>
            <IonIcon aria-hidden="true" icon={cardOutline}/>
          </IonItem>
          <IonItem>
            <IonLabel>Contact us</IonLabel>
            <IonIcon aria-hidden="true" icon={headsetOutline}/>
          </IonItem>
        </IonList>


        <IonButton className='sign-out' color="danger">Sign out</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
