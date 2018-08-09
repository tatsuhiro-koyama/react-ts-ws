export interface IMessage {
  id: number;
  text: string;
}

export default class Message {
  public static async getMessages(): Promise<IMessage[]> {
    const result = new Promise<IMessage[]>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.2) {
          reject(new Error("server error"));
          return;
        }

        resolve([
          { id: 1, text: "こんにちは。何か私に聞きたいことはありますか？" },
          { id: 2, text: "こんばんは。" },
          { id: 3, text: "おはよう。" }
        ]);
      }, 2000);
    });

    return result;
  }

  public static async postMessage(message: string): Promise<IMessage> {
    const result = new Promise<IMessage>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.2) {
          reject(new Error("server error"));
          return;
        }

        resolve({
          id: Math.floor(Math.random() * 1000000),
          text: message + "！！！"
        });
      }, 2000);
    });

    return result;
  }
}
