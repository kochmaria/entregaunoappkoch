// RemoveModal.jsx
import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';

const RemoveModal = ({ modalVisible, closeModal, removeItem }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.innerModalContainer}>
          <Text style={styles.modalText}>¿Quieres eliminar el producto?</Text>
          <TouchableOpacity style={[styles.button, styles.buttonRemove]} onPress={removeItem}>
            <Text style={styles.buttonText}>Sí</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={closeModal}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerModalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    marginVertical: 10,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonRemove: {
    backgroundColor: 'red',
  },
  buttonCancel: {
    backgroundColor: 'gray',
  },
});

export default RemoveModal;
