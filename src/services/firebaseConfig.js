import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function startFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyA8awc1A5ZfXsnuhCxd7bw0lnjBBYY5bzI",
    authDomain: "finplan-finance-management.firebaseapp.com",
    databaseURL:
      "https://finplan-finance-management-default-rtdb.firebaseio.com",
    projectId: "finplan-finance-management",
    storageBucket: "finplan-finance-management.appspot.com",
    messagingSenderId: "748992796476",
    appId: "1:748992796476:web:74c09c3156e0d01b7ef039",
  };

  const app = initializeApp(firebaseConfig);

  return getDatabase(app);
}

export default startFirebase;
