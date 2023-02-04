import {
    IonCol,
    IonContent,
    IonGrid,
    IonImg,
    IonInput,
    IonRippleEffect,
    IonRow,
    IonText,
  } from "@ionic/react";
  import { useHistory } from "react-router";
  import "./style.css";
  import { StatusBar } from "@capacitor/status-bar";
  
  interface ContainerProps {}
  const Login: React.FC<ContainerProps> = () => {
    const history = useHistory();
    StatusBar.setOverlaysWebView({ overlay: true });
  
    return (
      <IonContent fullscreen className="login-background">
        <IonGrid className="main-container">
            <div className="login-box">
                <IonRow className="login-container">
                    <div className="page-title">
                        <h3>Student's Login</h3>
                    </div>
                </IonRow>
              <IonRow className="input-box login-container">
                <IonInput
                  className="textfield"
                  type="email"
                  placeholder="Email"
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
        </IonGrid>
      </IonContent>
    );
  };
  
  export default Login;
  