  const { getDatabase } = require("firebase-admin/database");
const { initializeApp, cert } = require("firebase-admin/app");
const { getMessaging } = require("firebase-admin/messaging");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const serviceAccount = require('./service-account.json')

const firebaseConfig = {
  credential: cert(serviceAccount),
  apiKey: "AIzaSyAgB6EMXnXNL0rMbp8EyeCkPdRYVvOUI50",
  authDomain: "sri-hari-astro.firebaseapp.com",
  databaseURL: "https://sri-hari-astro-default-rtdb.firebaseio.com",
  projectId: "sri-hari-astro",
  storageBucket: "sri-hari-astro.firebasestorage.app",
  messagingSenderId: "897514154521",
  appId: "1:897514154521:web:fac5bd35ff731a036b1888",
  measurementId: "G-TGWFPW59JX"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const messaging = getMessaging(app);

module.exports = {
  app,
  database,
  messaging
};
