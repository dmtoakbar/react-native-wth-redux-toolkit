import React, { useRef, useMemo } from 'react';
import { View, Text, Button } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const MyBottomSheetExample = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Bottom Sheet" onPress={openBottomSheet} />
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
        <View style={{ padding: 20 }}>
          <Text>Here’s a bottom sheet!</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default MyBottomSheetExample;
