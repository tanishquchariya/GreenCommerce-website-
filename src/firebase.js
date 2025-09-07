// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATBMWzmFdFbNZAoWKULs1RkVs-CF22Yjw",
  authDomain: "stock-collection-4e8cf.firebaseapp.com",
  databaseURL: "https://stock-collection-4e8cf-default-rtdb.firebaseio.com",
  projectId: "stock-collection-4e8cf",
  storageBucket: "stock-collection-4e8cf.appspot.com",
  messagingSenderId: "718389405388",
  appId: "1:718389405388:web:32dc6f4a508ffa44554469",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
