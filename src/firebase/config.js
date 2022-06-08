import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgE1Ks3V73Bd2gsC3B-BVT0SaiZKSPV2I",
  authDomain: "kpi-manager-596ec.firebaseapp.com",
  projectId: "kpi-manager-596ec",
  storageBucket: "kpi-manager-596ec.appspot.com",
  messagingSenderId: "800162451392",
  appId: "1:800162451392:web:28404a008b3fecb4ad4225",
  measurementId: "G-DV0QVPZBW2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
