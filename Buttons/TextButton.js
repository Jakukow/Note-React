import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../Util/Colors";

const TextButton = ({ children, fun }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.button, { opacity: 0.7 }] : [styles.button]
      }
      onPress={fun}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    margin: 30,
    paddingVertical: 20,
    alignItems: "center",
    minWidth: 300,
    backgroundColor: Colors.plusButton,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});
