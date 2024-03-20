import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';

function Number(props) {
  function onDelete() {
    props.onDelete(props.id);
  }

  return (
    <div id='contacts'>
      <h4>
        <FontAwesomeIcon icon={faUserCheck} />   
        {props.name}
      </h4>
      <div id='numberconatact'>
        <p>{props.number}</p>
        <p>amount= {props.amount}</p>
        <button>Pay</button>
        <button onClick={onDelete}>Remove</button>
      </div>
    </div>
  );
}

export default Number;
