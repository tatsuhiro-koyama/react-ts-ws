import { observer } from "mobx-react";
import * as React from "react";
import MessageList from "../containers/MessageList";
import PostQuestion from "../containers/PostQuestion";
import "./App.css";
import Background from "./Background";

@observer
class App extends React.Component {
  public render() {
    return (
      <section className="frame sc-hMFtBS iYluwC">
        <Background />
        <div className="sc-gipzik gxlJcU full">
          <MessageList />
          <PostQuestion maxLength={30} />
        </div>
      </section>
    );
  }
}

export default App;
