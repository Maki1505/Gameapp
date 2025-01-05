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
import { analyticsOutline, cardOutline, fingerPrintOutline, headsetOutline, heartHalfOutline, information, informationCircleOutline, informationOutline, languageOutline, logoFacebook, logoGoogle, notifications, notificationsCircle, notificationsCircleOutline, receiptOutline } from 'ionicons/icons';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h2 className='section-head'>Gaming place  <IonIcon className='google' aria-hidden="true" icon={heartHalfOutline} /></h2>

        <IonButton color="white" className="google-btn">
          <IonIcon aria-hidden="true" icon={logoGoogle} /> Sign in with Google
        </IonButton>
        <IonButton className="facebook-btn">
          <IonIcon aria-hidden="true" icon={logoFacebook} /> Sign in with Facebook
        </IonButton>
        <p className='paragraf'>Other Methods</p>

        {/* <IonItemDivider className='buy'>Buying</IonItemDivider>

      <IonList className="first-list">
  <IonItem>
    <IonIcon aria-hidden="true" icon={receiptOutline} />
    <IonLabel>Orders</IonLabel>
  </IonItem>
  <IonItem>
    <IonLabel></IonLabel>
  </IonItem>
</IonList> */}


        <IonList className="second-list" lines="none">
          <IonItem>
            <IonLabel>Notifications</IonLabel>
            <IonIcon aria-hidden="false" icon={notificationsCircleOutline}/>
          </IonItem>
          <IonItem>
            <IonLabel>Privacy & security</IonLabel>
            <IonIcon aria-hidden="false" icon={fingerPrintOutline}/>
          </IonItem>
          <IonItem>
            <IonLabel>Activity log</IonLabel>
            <IonIcon aria-hidden="false" icon={analyticsOutline}/>
          </IonItem>
          <IonItem>
            <IonLabel>Language and region</IonLabel>
            <IonIcon aria-hidden="false" icon={languageOutline}/>
          </IonItem>
          <IonItem>
            <IonLabel>Payment information</IonLabel>
            <IonIcon aria-hidden="false" icon={cardOutline}/>
          </IonItem>
          <IonItem>
            <IonLabel>Contact us</IonLabel>
            <IonIcon aria-hidden="false" icon={headsetOutline}/>
          </IonItem>
        </IonList>

      
            <IonButton color={"white"}  className="settings">
          <IonIcon aria-hidden="true" icon={informationCircleOutline} /> Help Center
        </IonButton>
        <IonButton color={"white"}  className="settings">
          <IonIcon aria-hidden="true" icon={informationOutline} /> Language: English
        </IonButton>
        {/* <IonButton className='sign-out' color="danger">Sign out</IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
