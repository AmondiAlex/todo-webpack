import React from "react";
import ReactDOM from "react-dom";

import { Sports } from "./data"

/*const Template = () => {
     return(
        <div>
            <h1>THIS IS JSX FROM WEBPACK</h1>
            <City town="kisumu is a nice town" field="nice landscapes" />
        </div>
     );
};

ReactDOM.render(<Template />, document.getElementById("root"));*/

const Template1 = (props) => {
     return(
        <div>
            <h1>{props.data}</h1>
            <Sports golf="golf is awesome" field="Mombasa is the ground" />
        </div>
     );
};

ReactDOM.render(<Template1 />, document.getElementById("root"));

