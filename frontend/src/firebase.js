
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: {process.env.API},
  authDomain: {process.env.AUTH},
  projectId: {process.env.PROJECT_ID},
  storageBucket: {process.env.STORAGE},
  messagingSenderId: {process.env.SENDER_ID},
  appId: {process.env.APP_ID}
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;