
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



const app=firebase.initializeApp ({
  apiKey: "AIzaSyCK9phuOlBu18vRxIH16HF-SGbJZWnlOmE",
  authDomain: "vegg-burgers-ecommerce.firebaseapp.com",
  projectId: "vegg-burgers-ecommerce",
  storageBucket: "vegg-burgers-ecommerce.appspot.com",
  messagingSenderId: "162575543124",
  appId: "1:162575543124:web:376d3d72cc12f6324af6c1",
  measurementId: "G-KY5GKHGK3G"
});


export  function getFirebase(){
  return app;
}
export function getFirestore(){
  return firebase.firestore(app)
} 