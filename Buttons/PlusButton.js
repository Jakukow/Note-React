import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { View } from "react-native";

const PlusButton = () => {
  return (
    <Pressable style={styles.ButtonFrame}>
      <Ionicons name="add-sharp" color="black" size={50} />
    </Pressable>
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  ButtonFrame: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
    position: "absolute",
    top: -20,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 50,
  },
});
