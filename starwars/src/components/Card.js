import React from "react";

const Card = props =>{
    return(
        <div>
            <p>{props.name}</p>
            <img src={props.avatar} alt="avatar"></img>
            <p>status: {props.status}</p>            
            <p>species: {props.species}</p>
            <p>origin: {props.origin}</p>
            <p>gender: {props.gender}</p>
        </div>
    );

};
export default Card;