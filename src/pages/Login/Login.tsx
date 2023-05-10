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
  import React, { useState , useEffect, useRef , useContext} from "react";
  import axios from "../../api/axios";


  interface Student {
    studentNum: string;
    studentPassword: string;
  }
  interface Instructor {
    instructorNum: string;
    instructorPassword: string;
  }
  interface ContainerProps {}
  const Login: React.FC<ContainerProps> = () => {
    const history = useHistory();
    // StatusBar.setOverlaysWebView({ overlay: true });
    const [selectedOption, setSelectedOption] = useState < string > ('');
    const [UserID, setUserID] = useState<string>('');
    const [UserPassword, setUserPassword] = useState<string>('');
    const [student, setStudent] = useState<Student[]>([]);
    const [instructor, setInstructor] = useState<Instructor[]>([]);

    useEffect(() => {
      const getUsers  = async () => {
        const response = await axios.getAllStudent();
        setStudent(response);
      };
      getUsers ();
    }, []);
    useEffect(() => {
      const getUsers  = async () => {
        const response = await axios.getAllInstructors();
        setInstructor(response);
      };
      getUsers ();
    }, []);

    const handleFormSubmit = async () => {
      if(selectedOption === "Student"){
        const user = student.find((user) => user.studentNum === UserID && user.studentPassword === UserPassword);
        if(user){
          console.log("Student Home");
          history.push("/StudentHome");
        }else{
          console.log("Error!!!")
        }
      }else if(selectedOption === "Teacher"){
        const user = instructor.find((user) => user.instructorNum === UserID && user.instructorPassword === UserPassword);
        if(user){
          console.log("Instructor Home");
          history.push("/TeacherHome");
        }else{
          console.log("Error!!!")
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
                  type="email"
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
                    //{() => history.push("/Home")}
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
  