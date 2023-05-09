import { 
  IonContent, 
  IonInput, 
  IonButton, 
  IonItem, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar } from '@ionic/react';
import React from 'react';
import { StatusBar } from '@capacitor/status-bar';
import './Home.css';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

class StudentHome extends React.Component {
  render() {
    StatusBar.setOverlaysWebView({ overlay: false });
    const dataToScan = async () => {
      const data = await BarcodeScanner.scan({
        resultDisplayDuration: 2,
        prompt: '',
      });
      //alert(JSON.stringify(data));
      alert(data.text);
      this.setState({ stringEncoded: data.text})
    };
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Student QR Scanner</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <strong>Scan Content</strong>
          <IonButton color="danger" expand="block" onClick={dataToScan}>
              Scan Data 
          </IonButton>
        </IonContent>
      </IonPage >
    );
  }
};
export default StudentHome;