import * as React from "react";
import { IMessage } from "../models/Message";
import Loading from "./Loading";
import Message from "./Message";
import "./MessageList.css";

const MessageList: React.SFC<{
  showLoading: boolean;
  messages: IMessage[];
}> = props => (
  <ul className="sc-jlyJG cTPhae">
    {props.messages.map(message => {
      return <Message key={message.id} message={message} />;
    })}
    {props.showLoading ? <Loading /> : null}
  </ul>
);

export default MessageList;
