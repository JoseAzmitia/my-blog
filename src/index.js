import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZBxXFV-5fKTes0fwCnPI_7frGVti8wOs",
  authDomain: "my-react-blog-b157c.firebaseapp.com",
  projectId: "my-react-blog-b157c",
  storageBucket: "my-react-blog-b157c.appspot.com",
  messagingSenderId: "564840144285",
  appId: "1:564840144285:web:3ceba72910cfe0b2796374",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
