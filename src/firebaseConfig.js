// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
    // CREAR VARIABLES DE ENTORNO EN ARCHIVO .env.local PARA QUE FUNCIONE
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_ID_PROJECT,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_ID_SENDER_MSG,
    appId: process.env.VUE_APP_ID_APP

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;