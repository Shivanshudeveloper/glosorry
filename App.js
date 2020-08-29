// import { StatusBar } from "expo-status-bar";
// import React, from "react";
import React, { Component } from 'react';
import { WebView } from "react-native-webview";
// import { View } from "react-native";
import { BackHandler } from 'react-native';

import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView, StatusBar } from "react-native";

function LoadingIndicatorView() {
  return <ActivityIndicator color="#009b88" size="large" />;
}
 export default class ExampleWebView extends Component {
    webView = {
      canGoBack: false,
      ref: null,
    }
  
    onAndroidBackPress = () => {
      if (this.webView.canGoBack && this.webView.ref) {
        this.webView.ref.goBack();
        return true;
      }
      return false;
    }
  
    componentWillMount() {
      if (Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
      }
    }
  
    componentWillUnmount() {
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress');
      }
    }
    render() {

  return (
    <>
      <StatusBar barStyle="content" style={styles.top}/>
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{ uri: "https://fnfgrocery.com" }}
          startInLoadingState={true}
          ref={(webView) => { this.webView.ref = webView; }}
        onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
          renderLoading={() => (
            <ActivityIndicator
              color="black"
              size="large"
              style={styles.loader}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
}
  }
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  loader: {
    flex: 1,
  },
  top: {
    marginTop:"1px",
    backgroundColor: "white",
  }
});
