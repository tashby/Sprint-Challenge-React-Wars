import React from "react";

const Card = props =>{
    return(
        <div>
            <p>{props.name}</p>
            <p>status: {props.status}</p>            
            <p>species: {props.species}</p>
            <p>type: {props.type}</p>
            <p>gender: {props.gender}</p>
        </div>
    );

};
export default Card;