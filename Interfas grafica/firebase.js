  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCo9NUCzbSoGp1O2Vloh_qJt9Snu6FLaMc",
    authDomain: "cultigest-19dde.firebaseapp.com",
    projectId: "cultigest-19dde",
    storageBucket: "cultigest-19dde.appspot.com",
    messagingSenderId: "794697801536",
    appId: "1:794697801536:web:e54821715631a774e364a5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //conexion con la base de datos
  const db = getFirestore

  //guardado de datos
  export const GuardarSiembra = (Semilla, TipoSuelo, Area, fecha)=>{
    addDoc(collection(db ,"Siembra"), {Semilla, TipoSuelo, Area, fecha})
  }

  export const GuardarSemilla = (Nombre, SueloRecomendado, EpocaRecomendada, TiempoCosecha, Fertilizante, Insecticida)=>{
    addDoc(collection(db ,"Semilla"), {Nombre, SueloRecomendado, EpocaRecomendada,TiempoCosecha, Fertilizante, Insecticida})
  }

  export const GuardarSuelo = (TipoSuelo, color, PH)=>{
    addDoc(collection(db ,"Suelo"), {TipoSuelo, color, PH})
  }

  //obtener datos
  export const VerSiembras = ()=> getDocs(collection(db, 'Siembra'))

  export const  onGetSiembra = (callback) => onSnapshot(collection(db, 'Siembra', callback))