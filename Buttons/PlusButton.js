import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { View } from "react-native";
import { Colors } from "../Util/Colors";

const PlusButton = () => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.ButtonFrame, styles.pressed] : styles.ButtonFrame
      }
    >
      <Ionicons style={styles.icon} name="add-sharp" color="white" size={50} />
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
    top: -30,
    borderWidth: 6,
    backgroundColor: Colors.plusButton,
    borderColor: Colors.note,
    borderRadius: 50,
  },
  icon: {
    alignSelf: "center",
    paddingLeft: 3,
  },
  pressed: {
    opacity: 0.7,
  },
});
