import React from "react";

function Skills(props) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="circle">
          <span className={`${props.ico}`} data-icon={`${props.data}`}>
            <i className={`${props.icon}`}></i>
          </span>
        </div>
        <h4 className="font-weight-bold">{ props.tool }</h4>
      </div>
    </div>
  );
}

export default Skills;