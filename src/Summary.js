import React from "react";

export default function Summary(props) {
  return (
    <React.Fragment>
      <ul className="list-group">
        <li className="list-group-item"> Original bill: {props.bill} </li>
        <li className="list-group-item"> GST: {props.gst}</li>
        <li className="list-group-item"> Service Charge: {props.serviceCharge}</li>
        <li className="list-group-item"> Total: {props.total}</li>
      </ul>
    </React.Fragment>
  );
}
