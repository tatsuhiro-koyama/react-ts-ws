import * as React from "react";
import QuestionAction from "../actions/Question";
import PostQuestionComponent from "../components/PostQuestion";
import QuestionStore from "../stores/Question";

export default class PostQuestion extends React.Component<{
  maxLength: number;
}> {
  private store: QuestionStore;
  private action: QuestionAction;

  public constructor(props: { maxLength: number }) {
    super(props);
    this.store = new QuestionStore();
    this.action = new QuestionAction(this.store, this.props.maxLength);
    this.action.initialize();
  }

  public render() {
    // tslint:disable-next-line:no-console
    console.log(this.store, this.action);
    return <PostQuestionComponent store={this.store} action={this.action} />;
  }
}
