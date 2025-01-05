import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonLabel, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>

      <IonContent className="ion-padding">
        <IonSearchbar animated={true} placeholder="Pretraži..."></IonSearchbar>

        <IonSegment value="second">
          <IonSegmentButton value="first" contentId="first">
            <IonLabel>First</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="second" contentId="second">
            <IonLabel>Second</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="third" contentId="third">
            <IonLabel>Third</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <IonSegmentView>
          <IonSegmentContent id="first">First</IonSegmentContent>
          <IonSegmentContent id="second">Second</IonSegmentContent>
          <IonSegmentContent id="third">Third</IonSegmentContent>
        </IonSegmentView>

        <h2><b>New arrivals</b></h2>
        <IonCard >
          <img className='img' alt="Call of duty Modern warfare III" src="https://imgs.search.brave.com/IF7jGMLwF4-zsWqsDaW-BxEi2U28WW1MPs-W52iLeIw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMueGJveHNlcnZp/Y2VzLmNvbS9hc3Nl/dHMvNzEvYjUvNzFi/NTBmMjktNTc5OS00/YmUxLTk3ZWYtZDU4/ZDU3YzlmZTM3Lmpw/Zz9uPUNvRC1Nb2Rl/cm4tV2FyZmFyZS1J/SUlfR0xQLVBhZ2Ut/SGVyby0wXzEwODN4/MTIyMl8wMi5qcGc" />
          <IonCardHeader>
            <IonCardTitle className='game'>Call of Duty Modern Warfare III</IonCardTitle>
            <IonCardSubtitle className='year'>2024</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent className='money'>39.99 €</IonCardContent>
        </IonCard>


        <h2><b>Trending</b></h2>
        <IonCard >
          <img className='the-last-of-us' alt="The Last Of Us" src="https://m.media-amazon.com/images/M/MV5BY2JiNjU3NWYtMTRlYS00NzY3LWE2NDQtZGFkNWE2MDU4OTExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" />
          <IonCardHeader>
            <IonCardTitle className="game">The Last Of Us - Remastered</IonCardTitle>
            <IonCardSubtitle className='year'>2013</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent className='money'>29.99 €</IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
