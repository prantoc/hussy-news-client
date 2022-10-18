// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbLmzzBtztowS57P-aIHiv-mDqUyaurHs",
    authDomain: "hussy-news-client.firebaseapp.com",
    projectId: "hussy-news-client",
    storageBucket: "hussy-news-client.appspot.com",
    messagingSenderId: "172088995671",
    appId: "1:172088995671:web:de25e23f9700af0c7a9812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;