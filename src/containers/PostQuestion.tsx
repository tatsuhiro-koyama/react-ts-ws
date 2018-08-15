import { inject } from "mobx-react";
import * as React from "react";
import AppAction from "../actions/App";
import QuestionAction from "../actions/Question";
import PostQuestionComponent from "../components/PostQuestion";
import QuestionStore from "../stores/Question";

@inject("action")
export default class PostQuestion extends React.Component<{
  action?: AppAction;
  maxLength: number;
}> {
  private store: QuestionStore;
  private action: QuestionAction;

  public constructor(props: { action: AppAction; maxLength: number }) {
    super(props);
    this.store = new QuestionStore();
    this.action = new QuestionAction(
      this.store,
      this.props.maxLength,
      this.props.action!
    );
    this.action.initialize();
  }

  public render() {
    // tslint:disable-next-line:no-console
    console.log(this.store, this.action);
    return <PostQuestionComponent store={this.store} action={this.action} />;
  }
}
