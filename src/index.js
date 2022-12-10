import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // короче ести ./ то это свой файл, а если название, то название библиотеки, откуда идет подключеие
import "./style.css";


// от 27.11.2022 Компонент - кусок сайта, который используется многократно
//const Card = function() {
  //return <div className="card">^_^</div>
//}

// примеры написания <br/>
// <div> =) </div>
// <div className="red" />

ReactDOM.render(
 <App/>,
 
  // <> от 27.11.2022
  //   <h1>Hello <span className="mark">React</span>!</h1>
  //   <div class="box">
  //     <Card/>
  //     <Card/>
  //     <Card/>
  //     <Card/>
  //     <Card/>
  //     <Card/>
  //   </div>
  // </>,
  document.querySelector("#root")
)