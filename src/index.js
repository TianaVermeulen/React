import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Tiana"
const lname = "Vermeulen"

//can also add space by using <h1>My name is {fname+ " " +lname}

ReactDOM.render(<div>
<h1>My name is {fname} {lname}</h1>
<p>My lucky number is 8.</p>
</div>
, document.getElementById("root"));
