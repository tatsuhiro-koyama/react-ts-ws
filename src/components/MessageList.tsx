import { observer } from "mobx-react";
import * as React from "react";
import MessageListStore from "../stores/MessageList";
import Loading from "./Loading";
import Message from "./Message";
import "./MessageList.css";

const MessageList: React.SFC<{
  store: MessageListStore;
}> = props => (
  <ul className="sc-jlyJG cTPhae">
    {props.store.messages.map(message => {
      return <Message key={message.id} message={message} />;
    })}
    {props.store.showLoading ? <Loading /> : null}
  </ul>
);

export default observer(MessageList);
