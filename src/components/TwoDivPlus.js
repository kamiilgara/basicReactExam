import React from "react";
import { FaHandHoldingHeart, FaCalendar } from "react-icons/fa";

function TwoDivPlus() {
  return (
    <div className="aboutAct d-flex justify-content-center">
      {/* <div className="col-12 col-lg-6 justify-content-center"> */}
        <div className="d-flex divPlus my-4 mx-3">
          <div>
            <FaHandHoldingHeart />
          </div>
          <div className="mx-auto">
            <h5>1000+</h5>
            <p>KÖNÜLLÜ</p>
          </div>
        </div>
      {/* </div> */}
      {/* <div className="col-12 col-lg-6 justify-content-center"> */}
        <div className="d-flex divPlus my-4 mx-3">
          <div>
            <FaCalendar />
          </div>
          <div className="mx-auto">
            <h5>100+</h5>
            <p>LAYİHƏ</p>
          </div>
        </div>
      {/* // </div> */}
    </div>
  );
}

export default TwoDivPlus;
