import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QuestionProvider } from "./Context/QuestionContext";


ReactDOM.render(
  <React.StrictMode>
     <QuestionProvider>
        <App />
    </QuestionProvider>
  </React.StrictMode>,
    document.getElementById("root")
);
