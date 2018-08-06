export interface IMessage {
  id: number;
  text: string;
}

export default class Message {
  public static async getMessages(): Promise<IMessage[]> {
    return [
      { id: 1, text: "こんにちは。何か私に聞きたいことはありますか？" },
      { id: 2, text: "こんばんは。" },
      { id: 3, text: "おはよう。" }
    ];
  }
}
