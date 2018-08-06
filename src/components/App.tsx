import * as React from "react";
import MessageModel from "../models/Message";
import "./App.css";
import Background from "./Background";
import MessageList from "./MessageList";

class App extends React.Component<
  {},
  {
    messages: Array<{ id: number; text: string }>;
  }
> {
  public constructor(props: {}) {
    super(props);
    this.state = { messages: [] };
  }

  public componentDidMount() {
    MessageModel.getMessages().then(messages => {
      this.setState({ messages });
    });
  }

  public render() {
    return (
      <section className="frame sc-hMFtBS iYluwC">
        <Background />
        <MessageList messages={this.state.messages} />
      </section>
    );
  }
}

export default App;
