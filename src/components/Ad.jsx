import React from "react";

function Ad(props) {
  return (
    <div className="main">
      <div className="image">
        <img className={props.tag} src={props.img} alt="peeps" />
      </div>

      <h2>{props.name}</h2>
      <p>{props.phone}</p>
    </div>
  );
}

export default Ad;
