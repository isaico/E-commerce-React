// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK9phuOlBu18vRxIH16HF-SGbJZWnlOmE",
  authDomain: "vegg-burgers-ecommerce.firebaseapp.com",
  projectId: "vegg-burgers-ecommerce",
  storageBucket: "vegg-burgers-ecommerce.appspot.com",
  messagingSenderId: "162575543124",
  appId: "1:162575543124:web:376d3d72cc12f6324af6c1",
  measurementId: "G-KY5GKHGK3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  