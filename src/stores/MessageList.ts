import { observable } from "mobx";
import { IMessage } from "../models/Message";

export default class MessageListStore {
  @observable.shallow
  public messages: IMessage[] = [];
  @observable
  public showLoading: boolean = false;
}
