import React from 'react';
import ReactDOM from 'react-dom';

const image = "https://picsum.photos/200/300";

ReactDOM.render(<div>
  <h1 className="heading" contentEditable="true" spellCheck="false">My Favourite Foods</h1>
  <div>
    <img src="https://picsum.photos/200"></img>
    <img src={image}></img>
  </div>
</div>
  , document.getElementById("root"));
