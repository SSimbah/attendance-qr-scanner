import {
    IonCol,
    IonContent,
    IonGrid,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonRippleEffect,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonText,
  } from "@ionic/react";
  import { useHistory } from "react-router";
  import "./style.css";
  import { StatusBar } from "@capacitor/status-bar";
  import React, { useState } from "react";
  
  interface ContainerProps {}
  const Login: React.FC<ContainerProps> = () => {
    const history = useHistory();
    StatusBar.setOverlaysWebView({ overlay: true });
    const [selectedOption, setSelectedOption] = useState < string > ('');
    const handleFormSubmit = () => {
      console.log(`Selected option: ${selectedOption}`);
    };
  
    return (
      <IonContent fullscreen className="login-background">
        <IonGrid className="main-container">
          <IonCol>
            <div className="login-box">
              <IonRow className="input-box login-container">
                <IonItem className="account-dropdown">
                  <IonLabel>Account Type:</IonLabel>
                  <IonSelect
                    value={selectedOption}
                    placeholder="Select"
                    interface="popover"
                    onIonChange={(e) => setSelectedOption(e.detail.value)}
                  >
                    <IonSelectOption value="Teacher">Teacher</IonSelectOption>
                    <IonSelectOption value="Student">Student</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonRow>
  
              <IonRow className="input-box login-container">
                <IonInput
                  className="textfield"
                  type="email"
                  placeholder="User ID"
                ></IonInput>
              </IonRow>
              <IonRow className="input-box login-container">
                <IonInput type="password" placeholder="Password"></IonInput>
              </IonRow>
              <IonRow class="ion-justify-content-end login-container">
                <button
                  className="btn-login ion-activatable ripple-parent"
                  onClick={() => history.push("/Home")}
                >
                  <IonText>
                    <strong>LOGIN</strong>
                  </IonText>
                  <IonRippleEffect type="unbounded"></IonRippleEffect>
                </button>
              </IonRow>
            </div>
          </IonCol>
        </IonGrid>
      </IonContent>
    );
  };
  
  export default Login;
  