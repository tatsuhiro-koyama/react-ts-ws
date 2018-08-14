import * as React from "react";
import PostQuestionComponent from "../components/PostQuestion";
import QuestionStore from "../stores/Question";

export default class PostQuestion extends React.Component {
  private store: QuestionStore;

  public componentDidMount() {
    this.store = new QuestionStore();
  }

  public render() {
    // tslint:disable-next-line:no-console
    console.log(this.store);
    return <PostQuestionComponent store={this.store} />;
  }
}
