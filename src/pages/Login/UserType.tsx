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
import { StatusBar } from '@capacitor/status-bar';

  
  interface ContainerProps {}
  const Login: React.FC<ContainerProps> = () => {
  const history = useHistory();
  StatusBar.setOverlaysWebView({ overlay: true });

    return (
        
      <IonContent fullscreen className="login-background">
          
        <IonGrid className="main-container">
          <IonCol>
                <div className="login-box">
                    <IonRow class="ion-justify-content-center usertype-container">
                    <button className="btn-usertype ion-activatable ripple-parent" onClick={()=> history.push("/TeacherLogin")}>
                            <IonText><strong>TEACHER</strong></IonText>
                        <IonRippleEffect type="unbounded"></IonRippleEffect>
                        </button>
                    </IonRow>
                    <IonRow class="ion-justify-content-center usertype-container">
                    <button className="btn-usertype ion-activatable ripple-parent" onClick={()=> history.push("/StudentLogin")}>
                            <IonText><strong>STUDENT</strong></IonText>
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