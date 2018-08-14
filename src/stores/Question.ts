import { observable } from "mobx";

export default class QuestionStore {
  @observable
  public question: string;
  @observable
  public info: string;
}
