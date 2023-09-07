// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAICPZ14fuOiYReNKhQvrT5Bvn3MBZb9kU",
  authDomain: "chat-app-60c68.firebaseapp.com",
  projectId: "chat-app-60c68",
  storageBucket: "chat-app-60c68.appspot.com",
  messagingSenderId: "1043332013469",
  appId: "1:1043332013469:web:7d7e8274dc7470dc18e374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAtkbyeZHGbAYU_UfE9Kk_Mjf5XpPpCUdI",
//   authDomain: "chat-app-900f2.firebaseapp.com",
//   projectId: "chat-app-900f2",
//   storageBucket: "chat-app-900f2.appspot.com",
//   messagingSenderId: "255430581262",
//   appId: "1:255430581262:web:deda1f61a5e3bc7225305f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);