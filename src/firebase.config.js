// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-9WxCDehRIX6nr9JZHDCy9FK-QoYYrx8",
  authDomain: "the-news-dragon-ebde8.firebaseapp.com",
  projectId: "the-news-dragon-ebde8",
  storageBucket: "the-news-dragon-ebde8.appspot.com",
  messagingSenderId: "918307083369",
  appId: "1:918307083369:web:a235c1047f0068c59bfef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;