import { inject } from "mobx-react";
import * as React from "react";
import AppAction from "../actions/App";
import AppComponent from "../components/App";

@inject("action")
class App extends React.Component<{ action?: AppAction }> {
  public componentDidMount() {
    // tslint:disable-next-line:no-console
    // console.debug(this.props);
    // ページ表示の初期化処理をルートコンテナで実行する
    this.props.action!.initializePage();
  }

  public render() {
    // 元のコンポーネントを返す
    return <AppComponent />;
  }
}

export default App;
