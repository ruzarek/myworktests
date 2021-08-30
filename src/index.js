import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ContainerAed } from "./editor/ContainerAeD";
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <ContainerAed></ContainerAed>
      </DndProvider>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
