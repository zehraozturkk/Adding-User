import React from "react";
import classes from "./Card.module.css";

const Card = (props) =>{
    return(

        //dive verdiğimiz 2. ${} bizim cardı kullandığımız componentlerdaki cardın classname, eğer props.cssName desek mesela o zaman cardı kullandığımız componentta da className yerine cssName demeliyiz
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    ) 

};

export default Card;