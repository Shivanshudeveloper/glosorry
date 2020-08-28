// import { StatusBar } from "expo-status-bar";
import React from "react";
import { WebView } from "react-native-webview";
// import { View } from "react-native";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView, StatusBar } from "react-native";

function LoadingIndicatorView() {
  return <ActivityIndicator color="#009b88" size="large" />;
}
export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{ uri: "https://fnfgrocery.com" }}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color="black"
              size="large"
              style={styles.flexContainer}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  top: {
    marginTop:"12px",
    backgroundColor: "black",
  }
});
