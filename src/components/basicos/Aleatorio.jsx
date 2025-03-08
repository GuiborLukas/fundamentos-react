import React from "react";

export default function Aleatorio(props) {
    const aleatorio = parseInt(Math.random() * (props.second - props.first)) + props.first;
    return(
        <div> {aleatorio} </div>
    )
}