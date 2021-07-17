import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const AnimationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  //   const cssClasses = [
  //     "Modal",

  //     // props.show ? "ModalOpen" : "ModalClosed",

  //     // props.show === "entering"
  //     //   ? "ModalOpen"
  //     //   : props.show === "exiting"
  //     //   ? "ModalClosed"
  //     //   : null,
  //   ];

  return (
    <CSSTransition 
    mountOnEnter 
    unmountOnExit 
    in={props.show} 
    timeout={AnimationTiming}
    classNames ={{
        enter:'',
        enterActive:'ModalOpen',
        exit:'',
        exitActive:'ModalClosed'

    }}> 
    {/* //   {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];
        return ( */}
          <div className="Modal"> 
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
    {/* //     );
    //   }} */}
    </CSSTransition>
  );
};

export default modal;
