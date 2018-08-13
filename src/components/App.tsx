import { observer } from "mobx-react";
import * as React from "react";
import MessageList from "../containers/MessageList";
import "./App.css";
import Background from "./Background";
import PostQuestion from "./PostQuestion";

@observer
class App extends React.Component {
  public onClick = (question: string) => {
    // this.setState({ showLoading: true });
    // MessageModel.postMessage(question)
    //   .then(message => {
    //     this.setState({
    //       messages: this.state.messages.concat(message),
    //       showLoading: false
    //     });
    //   })
    //   .catch(error => {
    //     this.setState({ showLoading: false });
    //     alert("メッセージの保存に失敗しました。");
    //   });
  };

  public render() {
    return (
      <section className="frame sc-hMFtBS iYluwC">
        <Background />
        <div className="sc-gipzik gxlJcU full">
          <MessageList />
          <PostQuestion onClick={this.onClick} maxLength={30} />
        </div>
      </section>
    );
  }
}

export default App;
