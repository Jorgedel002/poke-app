import React from "react";

import "../../src/App.css"

import {Image, Row} from "react-bootstrap"

import PokeballImg from "../images/pokeball.png"

function Footer(){
    return(
        <Row className="align-items-center" style={{width: "100%", height: "13rem", backgroundColor: "#303030", margin: "auto"}}>
            <div className="d-flex justify-content-center align-items-center mobile-logo logo-container" style={{marginLeft: "auto", marginRight: "auto"}}>
                <Image src={PokeballImg} style={{width: "50px"}}/>
                <h1 className="poketitle">Poke-App</h1>
                <div className="author" style={{color: "white", fontSize: "1.2rem"}}>By Jorge Delgado</div>
            </div>
        </Row>
    )
}

export default Footer;