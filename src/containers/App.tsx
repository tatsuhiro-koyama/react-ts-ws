import { inject } from "mobx-react";
import * as React from "react";
import AppComponent from "../components/App";
import MessageModel from "../models/Message";
import MessageListStore from "../stores/MessageList";

@inject("store")
class App extends React.Component<{ store?: MessageListStore }> {
  public componentDidMount() {
    // ページ表示の初期化処理をルートコンテナで実行する
    const store = this.props.store!;
    store.showLoading = true;

    MessageModel.getMessages()
      .then(messages => {
        store.showLoading = false;
        store.messages = messages;
      })
      .catch(error => {
        store.showLoading = false;
        alert("メッセージの取得に失敗しました。再読み込みをお願いします。");
      });
  }

  public render() {
    // 元のコンポーネントを返す
    return <AppComponent />;
  }
}

export default App;
