import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import App from "../src/components/App";
import Background from "../src/components/Background";
import Message from "../src/components/Message";
import MessageList from "../src/components/MessageList";
import Loading from "../src/components/Loading";
import PostQuestion from "../src/components/PostQuestion";

storiesOf("Background", module).add("default", () => <Background />);

const message = {
  id: 1,
  text: "こんにちは。何か私に聞きたいことはありますか？"
};

storiesOf("Message", module).add("default", () => (
  <Message message={message} />
));

const messages = [
  { id: 1, text: "こんにちは。何か私に聞きたいことはありますか？" },
  { id: 2, text: "こんにちは。何か私に聞きたいことはありますか？" }
];

storiesOf("MessageList", module)
  .add("loading", () => <MessageList showLoading={true} messages={[]} />)
  .add("message list", () => (
    <MessageList showLoading={false} messages={messages} />
  ))
  .add("message more", () => (
    <MessageList showLoading={true} messages={messages} />
  ));

storiesOf("Loading", module).add("default", () => <Loading />);

storiesOf("PostQuestion", module).add("default", () => (
  <PostQuestion maxLength={20} onClick={action("click-PostQuestion")} />
));

storiesOf("App", module).add("default", () => <App />);
