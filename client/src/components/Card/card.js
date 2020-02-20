import React from "react";
import "./card.css"

function Card (prop) {
    return (
        <div className = {`"company-card"-${prop.questions}}`>
        {props.children}
           
        </div>
    );
}

export default Card