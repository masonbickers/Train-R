// firebaseConfig.js — Web config for your Next.js site

import { getApp, getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔥 Same Firebase project as your app
const firebaseConfig = {
  apiKey: "AIzaSyCo8g6QFxnqISn8wMqdg43WDG3OuUEbWEo",
  authDomain: "be-app-5cdd1.firebaseapp.com",
  projectId: "be-app-5cdd1",
  storageBucket: "be-app-5cdd1.firebasestorage.app",
  messagingSenderId: "277867142631",
  appId: "1:277867142631:web:77691f46f9ab7e7ed03142",
  measurementId: "G-V371M5P72Y",
};

// --- Init app (avoid re-initialising in dev) ---
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// --- Web auth with localStorage persistence ---
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.warn("Failed to set web auth persistence:", err?.message || err);
});

// --- Single exports for the website ---
export { app, auth };
export const db = getFirestore(app);
export const storage = getStorage(app);
