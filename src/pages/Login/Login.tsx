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
  import { useHistory } from "react-router-dom";
  import "./style.css";
  import { StatusBar } from "@capacitor/status-bar";
  import React, { useState , useEffect, useRef , useContext} from "react";
  import axios from 'axios';


  interface ContainerProps {}
  const Login: React.FC<ContainerProps> = () => {
    // StatusBar.setOverlaysWebView({ overlay: true });
    const history = useHistory();
    const [selectedOption, setSelectedOption] = useState < string > ('');
    const [UserID, setUserID] = useState<string>('');
    const [UserPassword, setUserPassword] = useState<string>('');
   

    const handleFormSubmit = async () => {
      if(selectedOption === "Student"){
        try {
          const response = await axios.post('https://localhost:7297/api/Students/Login/' + UserID + "/" + UserPassword);
          console.log(response.data.token);
          const userID  = JSON.stringify(response.data.user);
          console.log(userID);
          //localStorage.setItem('token', response.data);
          //localStorage.removeItem('token');
          // Redirect the user to the dashboard page
          if (response.status === 200) {
            const { token } = response.data.token;
            const { userID } = response.data.user.studentID;
            //localStorage.setItem('token', token);
            //localStorage.setItem('token', userID);
            localStorage.removeItem('token');
            localStorage.removeItem('userData');
            history.push("/StudentHome", { disableBack: true });
          } else {
            alert('Invalid email or password');
          }
        } catch (error) {
          console.error(error);
        }
        
      }else if(selectedOption === "Teacher"){
        try {
          const response = await axios.post('https://localhost:7297/api/Instructors/Login/' + UserID + "/" + UserPassword);
          console.log(response.data);
          if (response.status === 200) {
            const { token } = response.data;
            //const { userData } = response.data.user;
            localStorage.setItem('token', token);
            localStorage.setItem('userData', JSON.stringify(response.data.user));
            history.push("/TeacherDashboard", { disableBack: true });
          } else {
            alert('Invalid email or password');
          }
        } catch (error) {
          console.error(error);
        }
      }else{
        console.log("User need to select account type...")
      }
      console.log(`User Data: Account Type:${selectedOption}, User ID:${UserID}, Password:${UserPassword}`);
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
                  type="text"
                  placeholder="User ID"
                  value={UserID} onIonChange={e => setUserID(e.detail.value!)}
                ></IonInput>
              </IonRow>
              <IonRow className="input-box login-container">
                <IonInput type="password" placeholder="Password" value={UserPassword} onIonChange={e => setUserPassword(e.detail.value!)}></IonInput>
              </IonRow>
              <IonRow class="ion-justify-content-end login-container">
                <button
                  className="btn-login ion-activatable ripple-parent"
                  onClick={handleFormSubmit}
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
  