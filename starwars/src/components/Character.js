// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card"


export default function Character(){
    const [Characters, setCharacters] = useState([]);
  
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response=>{
                console.log(response.data.results);
            setCharacters(response.data.results);
              
            })
            .catch(response=>{
                console.log("error");
            });
    }, []);

    return(
        <div className = "name">
            <h1>{Characters.map(character =>{
                return(
                    <Card
                    name = {character.name}
                    status = {character.status}
                    species = {character.species}
                    type = {character.type}
                    gender = {character.gender}

                    />
                );
            })}
            </h1>
             
        </div>

    )


}