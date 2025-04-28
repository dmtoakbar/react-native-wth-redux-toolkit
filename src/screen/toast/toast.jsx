import React from 'react';
import { Button, View } from 'react-native';
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Toast" onPress={showToast} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default MyToastExample;
