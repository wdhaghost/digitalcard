import React from "react";
import Info from "./Info";
import pic from "../images/profile.jpeg"

export default function Card (){
    return (<div className="card">
         <img className="info-pic" src={pic} alt="profil"></img>
    <Info/>
    </div>)
}