import { observer } from "mobx-react";
import * as React from "react";
import QuestionStore from "../stores/Question";
import "./images/ico/ico_q-white.png";
import "./PostQuestion.css";

@observer
export default class PostQuestion extends React.Component<{
  store: QuestionStore;
}> {
  public constructor(props: { store: QuestionStore }) {
    super(props);
    // this.state = {
    //   info: `あと ${props.maxLength} 文字入力できます。`,
    //   question: ""
    // };
  }

  public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const questionText = e.target.value;
    // const textRestCount = this.props.maxLength - questionText.length;
    // const info =
    //   textRestCount >= 0
    //     ? `あと ${textRestCount} 文字入力できます。`
    //     : `${-textRestCount} 文字入力オーバーしています。`;
    // this.setState({
    //   info,
    //   question: questionText
    // });
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
