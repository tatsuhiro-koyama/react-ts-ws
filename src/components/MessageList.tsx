import * as React from "react";
import { IMessage } from "../models/Message";
import Message from "./Message";
import "./MessageList.css";

const MessageList: React.SFC<{
  messages: IMessage[];
}> = props => (
  <ul className="sc-jlyJG cTPhae">
    {props.messages.map(message => {
      return <Message key={message.id} message={message} />;
    })}
  </ul>
);

export default MessageList;
