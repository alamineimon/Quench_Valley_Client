// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCRG4EgN9uuy7J9sCdkzSfxDGi8XPNZXU',
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

// // Initialize Firebase
//  const app = initializeApp(firebaseConfig)
//  export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRG-4EgN9uuy7J9sCdkzSfxDGi8XPNZXU",
  authDomain: "quench-valley.firebaseapp.com",
  projectId: "quench-valley",
  storageBucket: "quench-valley.appspot.com",
  messagingSenderId: "768940323697",
  appId: "1:768940323697:web:1f59f1e75fe67f7c017cd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;