import * as React from "react";
import { IMessage } from "../models/Message";
import "./images/avatar/normal.png";
import "./Message.css";

const Message: React.SFC<{ message: IMessage }> = props => (
  <li className="timeline-item notice sc-jAaTju bsWovD">
    <div className="sc-cSHVUG llSgNg balloon sc-fjdhpX fXlxWw">
      <div className="avatar-icon sc-jzJRlG giutph" />
      <span className="sc-kgoBCf iRpYwX">{props.message.text}</span>
    </div>
  </li>
);

export default Message;
