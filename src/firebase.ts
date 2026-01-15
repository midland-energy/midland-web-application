import { initializeApp } from "firebase/app"
import { getAnalytics, isSupported } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID 
// };
const firebaseConfig = {
  apiKey: "AIzaSyCfI-qaCke9Qmx8ll8DDb3Q0X_vcWePl-g",
  authDomain: "midland-software.firebaseapp.com",
  projectId: "midland-a86cc",
  storageBucket: "midland-software.firebasestorage.app",
  messagingSenderId: "980758430472",
  appId: "1:980758430472:web:8a31776b50a0aee073e2bd",
  measurementId: "G-11GH60TTKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Firestore
export const db = getFirestore(app)

// Connect to Firestore Emulator when running locally
// if (window.location.hostname === "localhost") {
//   connectFirestoreEmulator(db, "localhost", 8080)
//   console.log("🔥 Using Firestore Emulator")
// }

// Analytics (disable in localhost)
isSupported().then((supported) => {
  if (supported && window.location.hostname !== "localhost") {
    getAnalytics(app)
  }
})
