import React from "react";

function Entry(props){
    return(
        <tr>
            <td><img alt={props.lastName} src={props.image}/></td> 
            <td>{props.firstName} {props.lastName}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.email}</td>
            <td>{props.birthday}</td>
        </tr>
    );
}

export default Entry;