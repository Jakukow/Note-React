import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Colors } from "../Util/Colors";
import Input from "../Components/Input";
import { SelectList } from "react-native-dropdown-select-list";
import { data } from "../Util/data";
import TextButton from "../Buttons/TextButton";
import { Keyboard } from "react-native";

const NewNoteForm = ({ navigation }) => {
  const NextHandler = () => {
    navigation.navigate("NewNoteView");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>New Note</Text>
      </View>

      <View style={styles.form}>
        <View style={{ marginTop: 20 }}>
          <Input title="Title" />
        </View>
        <View style={styles.select}>
          <Text style={styles.label}>Category</Text>
          <SelectList
            search={false}
            setSelected={() => {}}
            data={data}
            save="value"
            boxStyles={{
              borderColor: "lightgrey",
              justifyContent: "center",
              alignItems: "center",
            }}
            inputStyles={{ fontSize: 20, fontFamily: "Helvetica Neue" }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextButton fun={NextHandler}>Next</TextButton>
        </View>
      </View>
    </View>
  );
};

export default NewNoteForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 100,
    height: "100%",
    borderTopRightRadius: 50,

    backgroundColor: Colors.note,
  },
  textContainer: {
    marginTop: 60,
    width: "100%",
    padding: 30,
  },
  text: {
    fontSize: 25,
    fontFamily: "Helvetica Neue",
    color: "grey",
    fontWeight: "700",
  },
  form: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",

    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    minHeight: "50%",
    maxHeight: "60%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 8, height: 8 },
    shadowRadius: 10,
  },
  select: {
    width: 300,
    marginTop: 40,
  },
  label: {
    marginBottom: 20,

    fontSize: 25,
    fontWeight: "700",

    fontFamily: "Helvetica Neue",
  },
});
