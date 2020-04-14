import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAlert } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const Home: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const initDb = (): void => {
      console.log('initDB fired!');
      try {
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
      } catch(e) {
        setShowAlert(true);
        console.log('please use a device: ', e)
      }
      
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
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header={'Mamma mia!'}
            message={'This will only work on a device. Please refer to the README.'}
            buttons={['OK']}
          />
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
