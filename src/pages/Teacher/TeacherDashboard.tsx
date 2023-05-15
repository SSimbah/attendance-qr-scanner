import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRippleEffect,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import { useHistory } from "react-router";
  //import "./style.css";
  import { StatusBar } from "@capacitor/status-bar";
import { useEffect, useState } from "react";
import axios from "axios";
  
  interface ClassModel{
    classID: number;
    className: string;
    classSchedule: string;
    classTime_End: string;
    classTime_Start: string;
    instructor: object;
    instructorID: number;
    subject: {
        subjectCode: string;
        subjectName: string;
        subjectNameExt: string
    }
    subjectID: number
  }
  interface ContainerProps {}
  const TeacherDashboard: React.FC<ContainerProps> = () => {
    const history = useHistory();
    //StatusBar.setOverlaysWebView({ overlay: true });


    const [userName, setUserName] = useState('');
    const [classes, setClasses] = useState<ClassModel[]>([]);
    
    const jsonUserData = localStorage.getItem('userData');
    const userData = JSON.parse(jsonUserData?.toString()!);
    
    useEffect(() => {
        // const jsonUserData = localStorage.getItem('userData');
        // const userData = JSON.parse(jsonUserData?.toString()!);
        setUserName(userData.fullName);
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
          const response = await axios.get<ClassModel[]>('https://localhost:7297/api/Instructors/GetClassList/' + userData.instructorID);
          setClasses(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    const userLogOut = async () => {
        alert("Logged Out");
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        history.replace("/", { disableBack: true });
    }
    //console.log(response);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{userName}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton color="danger" shape="round" fill="outline" onClick={userLogOut}>Log out</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
        <IonContent className="ion-padding">
        <IonList>
            {classes.map(item => (
                <IonItem key={item.classID} button detail={true}>
                    <IonLabel>
                        <h3>{item.className}</h3>
                        <p>{item.subject.subjectCode}</p>
                        <p>{item.subject.subjectName}</p>
                        <p>{item.classSchedule} | {item.classTime_Start} - {item.classTime_End}</p>
                    </IonLabel>
                </IonItem>
            ))}
        </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default TeacherDashboard;
  