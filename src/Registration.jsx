import React from 'react';

function Registration(props) {
  return (
    <div>
      <div className="input-group mb-3" id="inputblock" >
        <span className="input-group-text" id="basic-addon1">{props.icon}</span>
        <input type={props.name} className="form-control" placeholder={props.placeholder} aria-label={props.placeholder} aria-describedby="basic-addon1" />
      </div>
    </div>
  );
}

export default Registration;
