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
            <p>{Characters.map(character =>{
                return(
                    <Card
                    name = {character.name}
                    avatar = {character.image}
                    status = {character.status}
                    species = {character.species}
                    origin = {character.origin.name}
                    gender = {character.gender}

                    />
                );
            })}
            </p>
             
        </div>

    )


}