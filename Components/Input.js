import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ title, fun, val, isValid }) => {
  let inputSyles = [styles.input];
  if (!isValid) {
    inputSyles.push(styles.invalidInput);
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, !isValid && { color: "#ff6c70" }]}>
        {title}
      </Text>
      <TextInput style={inputSyles} value={val} onChangeText={fun} />
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
  invalidInput: {
    backgroundColor: "#ffc8c9",
    borderColor: "#ffa3a6",
  },
});
