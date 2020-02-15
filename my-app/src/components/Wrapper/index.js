import React from "react";


function Wrapper(props) {
  return <div className="container text-center">{props.children}</div>;
}

export default Wrapper;