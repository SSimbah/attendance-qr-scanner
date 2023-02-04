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
  import './TeacherHome.css';
  import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StatusBar } from '@capacitor/status-bar';
  class TeacherHome extends React.Component {
    state = {
      stringEncoded: '',
      dataEncode: ''
    }
    handleChange = (e: any) => {
      const { value, name } = e.target;
      this.setState({ 
        [name]: value }
      );
      console.log(this.state);
    };
    render() {
      StatusBar.setOverlaysWebView({ overlay: false });
      const createCode = () => {
        BarcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, this.state.dataEncode)
          .then(data => {
            console.log(data);
          }, error => {
            console.log("Error : " + error);
          });
      };
  
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Teacher QR Generator</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <strong>Generate QR code</strong>
            <IonItem>
              <IonInput name='dataEncode' onIonChange={this.handleChange} clearInput></IonInput>
            </IonItem>
            <IonButton color="primary" expand="block" onClick={createCode}>
              Generate QR
            </IonButton>
          </IonContent>
        </IonPage >
      );
    }
  };
  export default TeacherHome;