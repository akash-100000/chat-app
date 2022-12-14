import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const Config = {
    apiKey: "AIzaSyC0tFs-BpWAUtF6J8N2IU13drraowbHrwE",
    authDomain: "chat-web-app-3b6a5.firebaseapp.com",
    projectId: "chat-web-app-3b6a5",
    storageBucket: "chat-web-app-3b6a5.appspot.com",
    messagingSenderId: "968048149369",
    appId: "1:968048149369:web:ea4ef7cd4208a4e55f25a8"
  };

const app =   firebase.initializeApp(Config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();