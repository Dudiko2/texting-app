import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const logger = store => next => action => {
	console.log(action);
	const result = next(action);
	console.log(store.getState());
	return result;
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
