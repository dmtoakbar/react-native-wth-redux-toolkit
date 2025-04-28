import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const MyToastExample = () => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Hello',
      text2: 'This is a toast message!',
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Show Toast" onPress={showToast} />
      {/* Ensure Toast is added at the root of your component tree */}
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyToastExample;
