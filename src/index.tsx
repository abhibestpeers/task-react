import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app";
import { Provider } from "react-redux";
import store from "./redux/store";
import 'font-awesome/css/font-awesome.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

if (module.hot !== undefined) {
  module.hot.accept();
}
