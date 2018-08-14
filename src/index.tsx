import * as mobx from "mobx";
import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import AppAction from "./actions/App";
import App from "./containers/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import MessageListStore from "./stores/MessageList";

mobx.configure({ enforceActions: true });

const store = new MessageListStore();
const action = new AppAction(store);

ReactDOM.render(
  <Provider store={store} action={action}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
