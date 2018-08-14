import { action, runInAction } from "mobx";
import MessageModel from "../models/Message";
import MessageListStore from "../stores/MessageList";

export default class AppAction {
  private store: MessageListStore;

  public constructor(store: MessageListStore) {
    this.store = store;
  }

  @action
  public async initializePage() {
    try {
      this.store.showLoading = true;

      const messages = await MessageModel.getMessages();

      runInAction(() => {
        this.store.showLoading = false;
        this.store.messages = messages;
      });
    } catch (error) {
      runInAction(() => {
        this.store.showLoading = false;
        alert("メッセージの取得に失敗しました。再読み込みをお願いします。");
      });
    }
  }
}
