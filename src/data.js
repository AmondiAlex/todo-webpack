/*import React from "react";
const City = () => {
        return <h2>kisumu</h2>;
};*/

/*parent comp. creates props 
 Props are passed by parent Component to child component
 

import React from "react";
const City = (props) => {
        return <h2>{props.town}</h2>;
};
import React from "react";
const City = (props) => {
        return(
        <div> 
            <h2>{props.town}</h2>
            <h3>{props.field}</h3>
         </div>
        );
};*/

const Sports = (props) => {
        return(
        <div> 
            <h2>{props.golf}</h2>
            <h3>{props.field}</h3>
        </div>
        );
};

export { Sports };
