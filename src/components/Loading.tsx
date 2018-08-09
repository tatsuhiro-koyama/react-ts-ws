import * as React from "react";
import "./images/loading.gif";
import "./Loading.css";

const Loading: React.SFC = () => {
  return (
    <li className="loading-area">
      <div className="ball-scale-multiple">
        <div />
        <div />
        <div />
      </div>
    </li>
  );
};

export default Loading;
