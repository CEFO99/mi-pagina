import React from "react";

function Contact(props) {
  return (
    <div className="box">
      <div className="body">
        <div className="imgContainer">
          <img
            src={`${ props.image }`}
          />
        </div>
        <div className="content d-flex flex-column align-items-center justify-content-center">
          <div>
            <h3 className="text-white fs-5">{ props.platform }</h3>
            <p className="fs-6 text-white">{ props.info }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
