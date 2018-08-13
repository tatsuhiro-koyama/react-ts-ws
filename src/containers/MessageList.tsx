import { inject } from "mobx-react";
import * as React from "react";
import MessageListComponent from "../components/MessageList";
import MessageListStore from "../stores/MessageList";

@inject("store")
class MessageList extends React.Component<{ store?: MessageListStore }> {
  public render() {
    // tslint:disable-next-line:no-console
    console.log(this.props);
    return <MessageListComponent store={this.props.store!} />;
  }
}

export default MessageList;
