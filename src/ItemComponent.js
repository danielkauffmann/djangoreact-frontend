import React from "react";


export default function ItemComponent(props){
    const status = props.status
    return <li>Item desc.: { props.name }
        <p>Status: {status ? <div>Pago</div> : <div>Não Pago</div>} </p>
    </li>
}