import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show modal message</Text>
      </Pressable>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <Text>This is modal...</Text>
          <Pressable
            style={{ marginTop: 32 }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={{ fontWeight: "bold" }}>Close</Text>
          </Pressable>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
  },
});
