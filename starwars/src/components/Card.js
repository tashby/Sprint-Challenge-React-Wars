import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const BioCard = props =>{
    return(
     
            <Card className="bg-info" style={{ padding: '.5rem' }}>
            <CardImg top width="100%" src={props.avatar} alt="avatar" />
            <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardText>status: {props.status}</CardText>            
            <CardText>species: {props.species}</CardText>
            <CardText>origin: {props.origin}</CardText>
            <CardText>gender: {props.gender}</CardText>
            </CardBody>
            </Card>

    );

};
export default BioCard;