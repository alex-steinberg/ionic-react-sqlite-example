import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const Home: React.FC = () => {
  const initDb = (): void => {
      console.log('initDB fired!');
      SQLite.create({
          name: 'data.db', location: 'default'
      }).then(async (db: SQLiteObject) => {
          try {
              const create = await db.executeSql('create table if not exists danceMoves(name VARCHAR(32))', []);
              await console.log('Table created/exists. Msg: ', create);
              const insert = await db.executeSql('insert into danceMoves (name) values (?)', ['Macarena']);
              await console.log('Inserted Macarena: ', insert);
          } catch (e) {
              console.log('SQL error: ', e);
          }
      })
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonButton onClick={initDb}>Init DB</IonButton>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
