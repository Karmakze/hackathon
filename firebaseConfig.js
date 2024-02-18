// firebaseConfig.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

export const firebaseConfig = {
    apiKey: "AIzaSyC74UJpk7aG0If_VkBUeIht2IPPPLBUwZc",
    authDomain: "hackathon-login-37cba.firebaseapp.com",
    projectId: "hackathon-login-37cba",
    storageBucket: "hackathon-login-37cba.appspot.com",
    messagingSenderId: "985209358396",
    appId: "1:985209358396:web:d5a869addf41c985469b39",
    measurementId: "G-3HKJ576C25"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
