import React from "react";


export default function ItemComponent(props){
    const status = props.status
    return <li>Item desc.: { props.name }
        <div>Status: {status ? <div>Pago</div> : <div>Não Pago</div>} </div>
    </li>
}