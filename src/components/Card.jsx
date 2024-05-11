import React from "react";

const Card = (props)=>{
    return (
        <>
        <h1>Weather Detail</h1>
        <div className="card-container">
            <img src={props.data?.current?.condition?.icon}/>
            <h2>Temprature: {props.data?.current?.temp_c} C</h2>
            <h3>{props.data?.location?.name} - {props.data?.location?.region}</h3>
        </div>
        </>
    )
}

export default Card;