import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

const MyModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <Button
        title="Show Modal"
        onPress={openModal} // This function is for opening the modal
      />

      <Modal
        animationType="slide"  // You can use 'slide', 'fade', or 'none'
        transparent={true}  // Makes the background behind the modal semi-transparent
        visible={modalVisible}
        onRequestClose={closeModal}  // Handles back button press on Android
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>This is a modal!</Text>
            <Button
              title="Close Modal"
              onPress={closeModal}  // This function is for closing the modal
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
  },
});

export default MyModalExample;
