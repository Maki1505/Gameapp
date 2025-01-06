import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { heartHalfOutline } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>

      <IonContent className="ion-padding">
        <h2 className='section-head'>Gaming place  <IonIcon className='google' aria-hidden="true" icon={heartHalfOutline} /></h2>
        <IonSearchbar animated={true} placeholder="Pretraži..."></IonSearchbar>

        <IonSegment value="second">
          <IonSegmentButton value="first" contentId="first">
            <IonLabel>First</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="second" contentId="second">
            <IonLabel>Explore</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="third" contentId="third">
            <IonLabel>Third</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <IonSegmentView>
          <IonSegmentContent id="first">First</IonSegmentContent>
          <IonSegmentContent id="second">
          </IonSegmentContent>
          <IonSegmentContent id="third">Third</IonSegmentContent>
        </IonSegmentView>
        <img alt="FC25" src="https://assets.goal.com/images/v3/blt178d34156522b281/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-07-17T151013.046.jpg?auto=webp&format=pjpg&width=3840&quality=60" />

        <h2 className='section-header'><b>New arrivals</b></h2>
        <IonCard >
          <img alt="Call of duty Modern warfare III" src="https://imgs.search.brave.com/IF7jGMLwF4-zsWqsDaW-BxEi2U28WW1MPs-W52iLeIw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMueGJveHNlcnZp/Y2VzLmNvbS9hc3Nl/dHMvNzEvYjUvNzFi/NTBmMjktNTc5OS00/YmUxLTk3ZWYtZDU4/ZDU3YzlmZTM3Lmpw/Zz9uPUNvRC1Nb2Rl/cm4tV2FyZmFyZS1J/SUlfR0xQLVBhZ2Ut/SGVyby0wXzEwODN4/MTIyMl8wMi5qcGc" />
          <IonCardHeader>
            <IonCardTitle className='game'>Call of Duty Modern Warfare III</IonCardTitle>
            <IonCardSubtitle className='year'>2022</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent className='money'>39.99 €</IonCardContent>
        </IonCard>


        <h2 className='section-header'><b>Trending</b></h2>
        <IonCard className='picture'>
          <img alt="The Last Of Us" src="https://m.media-amazon.com/images/M/MV5BY2JiNjU3NWYtMTRlYS00NzY3LWE2NDQtZGFkNWE2MDU4OTExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" />
          <IonCardHeader className='header'>
            <IonCardTitle className="game">The Last Of Us - Remastered</IonCardTitle>
            <IonCardSubtitle className='year'>2013</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent className='text'>It's a game about apocalypse in our current world.The fans love it.The remastered version is out.</IonCardContent>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
