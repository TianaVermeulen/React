import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi }  from "./components/Math";
// a wild card can also be used for import - import * as pi from "./components/Math"
// but you lose the benefit of using the default option

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);