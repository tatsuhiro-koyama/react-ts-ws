import { action } from "mobx";
import QuestionStore from "../stores/Question";

export default class Question {
  public constructor(private store: QuestionStore, private maxLength: number) {}

  @action
  public initialize() {
    this.store.question = "";
    this.store.info = `あと ${this.maxLength} 文字入力できます。`;
  }

  @action
  public onChange(questionText: string) {
    const textRestCount = this.maxLength - questionText.length;
    this.store.info =
      textRestCount >= 0
        ? `あと ${textRestCount} 文字入力できます。`
        : `${-textRestCount} 文字入力オーバーしています。`;
    this.store.question = questionText;
  }
}
