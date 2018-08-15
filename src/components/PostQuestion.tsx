import { observer } from "mobx-react";
import * as React from "react";
import QuestionAction from "../actions/Question";
import QuestionStore from "../stores/Question";
import "./images/ico/ico_q-white.png";
import "./PostQuestion.css";

@observer
export default class PostQuestion extends React.Component<{
  store: QuestionStore;
  action: QuestionAction;
}> {
  public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const questionText = e.target.value;
    this.props.action.onChange(questionText);
  };

  public onClick = () => {
    // if (this.state.question.length === 0) {
    //   alert("入力されていません");
    //   return;
    // }
    // if (this.state.question.length > this.props.maxLength) {
    //   alert("入力文字数オーバー");
    //   return;
    // }
    // this.props.onClick(this.state.question);
    // this.setState({ question: "" });
  };

  public render() {
    // tslint:disable-next-line:no-console
    console.log(this.props);

    const store = this.props.store;
    return (
      <section className="sc-hzDkRC dhwHxy sc-gzVnrw dXRhlt">
        <div className="question-line">
          <input
            type="text"
            className="textbar sc-dnqmqq dJoUoc"
            placeholder="あやせのふりをして答える"
            onChange={this.onChange}
            value={store.question}
          />
          <div
            onClick={this.onClick}
            className="balloon-btn sc-iwsKbI fLFebW"
          />
        </div>
        <div className="question-line question-info">{store.info}</div>
      </section>
    );
  }
}
