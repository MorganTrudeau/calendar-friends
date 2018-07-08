import React from "react";
import { StyleSheet, View } from "react-native";
// Components
import Calendar from "./components/Calendar";
// Navigation
import RootNavigator from "./navigation";
// Redux
import { Provider } from "react-redux";
import store from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
