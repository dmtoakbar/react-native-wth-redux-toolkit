import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = ({ navigation }) => {
  const navigatin = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Button title="Go to News" onPress={() => navigatin.navigate('Newsapp')} />
      </View>
      <View style={styles.webviewContainer}>
        <WebView
          source={{ uri: 'https://www.npmjs.com/package/react-native-webview' }}
          startInLoadingState
          javaScriptEnabled
          domStorageEnabled
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  navbar: {
    height: 50,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  webviewContainer: {
    flex: 1,
  },
});

export default WebViewScreen;
