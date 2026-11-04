import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnfsw5v7Vs00E06AX0686-XZs0qThRaLA",
  authDomain: "daiedi-lingeries.firebaseapp.com",
  databaseURL: "https://daiedi-lingeries-default-rtdb.firebaseio.com",
  projectId: "daiedi-lingeries",
  storageBucket: "daiedi-lingeries.firebasestorage.app",
  messagingSenderId: "521312315334",
  appId: "1:521312315334:web:1752abedbc0a7fece534c7",
  measurementId: "G-72KQVPR175"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };