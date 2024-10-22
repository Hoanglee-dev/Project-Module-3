import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN9KR9xY3fIiB-SJY0P7os_1_1ZVviyiU",
  authDomain: "hoanglee-89a6e.firebaseapp.com",
  projectId: "hoanglee-89a6e",
  storageBucket: "hoanglee-89a6e.appspot.com",
  messagingSenderId: "1071139703664",
  appId: "1:1071139703664:web:0591f7c44c71ea7570ddb5"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)