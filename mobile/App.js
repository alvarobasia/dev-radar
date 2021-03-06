import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { StatusBar } from 'react-native'
import Routes from "./src/routes";
YellowBox.ignoreWarnings([
  'Possible', 'Unrecognized WebSocket'
])
export default function App() {
  return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
        <Routes />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontWeight: "bold",
    fontSize: 32,
    color: "#fff"
  }
});
