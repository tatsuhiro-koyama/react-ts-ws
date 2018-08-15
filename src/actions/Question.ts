import { action } from "mobx";
import QuestionStore from "../stores/Question";
import AppAction from "./App";

export default class QuestionAction {
  public constructor(
    private store: QuestionStore,
    private maxLength: number,
    private appAction: AppAction
  ) {}

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

  @action
  public async onClick() {
    if (this.store.question.length === 0) {
      alert("入力されていません");
      return;
    }
    if (this.store.question.length > this.maxLength) {
      alert("入力文字数オーバー");
      return;
    }

    try {
      await this.appAction.postQuestion(this.store.question);
    } catch (error) {
      alert("メッセージの保存に失敗しました。" + error);
      return;
    }
    this.initialize();
  }
}
