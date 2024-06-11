// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBEWXzFNQ67F1v-k7crZHfw9vsmhmbF5G4',
  authDomain: 'e-commercereact-e478d.firebaseapp.com',
  projectId: 'e-commercereact-e478d',
  storageBucket: 'e-commercereact-e478d.appspot.com',
  messagingSenderId: '195508597650',
  appId: '1:195508597650:web:f0ce901c774b6a5273c74b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
