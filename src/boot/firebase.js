// import { boot } from 'quasar/wrappers'

// // "async" is optional;
// // more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
//   // something to do
// })



import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_ENV_API_KEY,
  authDomain: process.env.VUE_APP_ENV_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_ENV_PROJECT_ID,
  storageBucket: process.env.VUE_APP_ENV_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_ENV_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ENV_APP_ID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db


