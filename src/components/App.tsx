import * as React from "react";
import MessageModel from "../models/Message";
import "./App.css";
import Background from "./Background";
import MessageList from "./MessageList";
import PostQuestion from "./PostQuestion";

class App extends React.Component<
  {},
  {
    showLoading: boolean;
    messages: Array<{ id: number; text: string }>;
  }
> {
  public constructor(props: {}) {
    super(props);
    this.state = { showLoading: true, messages: [] };
  }

  public componentDidMount() {
    this.setState({ showLoading: true });
    MessageModel.getMessages()
      .then(messages => {
        this.setState({ showLoading: false, messages });
      })
      .catch(error => {
        this.setState({ showLoading: false });
        alert("メッセージの取得に失敗しました。再読み込みをお願いします。");
      });
  }

  public onClick = (question: string) => {
    this.setState({ showLoading: true });
    MessageModel.postMessage(question)
      .then(message => {
        this.setState({
          messages: this.state.messages.concat(message),
          showLoading: false
        });
      })
      .catch(error => {
        this.setState({ showLoading: false });
        alert("メッセージの保存に失敗しました。");
      });
  };

  public render() {
    return (
      <section className="frame sc-hMFtBS iYluwC">
        <Background />
        <div className="sc-gipzik gxlJcU full">
          <MessageList {...this.state} />
          <PostQuestion onClick={this.onClick} maxLength={30} />
        </div>
      </section>
    );
  }
}

export default App;
