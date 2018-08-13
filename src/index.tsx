import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./containers/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import MessageListStore from "./stores/MessageList";

const store = new MessageListStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
