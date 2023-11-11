import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ title, fun }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{title}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 40,
  },
  label: {
    fontSize: 25,

    fontFamily: "Helvetica Neue",
    fontWeight: "700",
  },
  input: {
    marginTop: 20,
    width: 300,
    borderWidth: 1,
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "lightgrey",
    fontSize: 20,
  },
});
