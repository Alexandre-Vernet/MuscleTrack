import { initializeApp } from 'firebase/app';

export const environment = {
    production: false,
};

const firebaseConfig = {
    apiKey: 'AIzaSyBfDIayp3Hthf7g2a6EhmYu98muXApAlqI',
    authDomain: 'muscle-track-c8138.firebaseapp.com',
    projectId: 'muscle-track-c8138',
    storageBucket: 'muscle-track-c8138.appspot.com',
    messagingSenderId: '453824529990',
    appId: '1:453824529990:web:3e6167b84df3596a7bec47'
};

// Initialize Firebase
initializeApp(firebaseConfig);
