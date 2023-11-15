import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Colors } from "../Util/Colors";
import Input from "../Components/Input";
import { SelectList } from "react-native-dropdown-select-list";
import { data } from "../Util/data";
import TextButton from "../Buttons/TextButton";

import { useState } from "react";

const NewNoteForm = ({ navigation }) => {
  const [formHandler, setFormHandler] = useState({
    title: {
      value: "",
      isValid: true,
    },
    category: { value: null, isValid: true },
  });
  const NextHandler = () => {
    const titleIsValid = formHandler.title.value.trim().length > 0;
    const categoryIsValid = !!formHandler.category.value;
    if (!titleIsValid || !categoryIsValid) {
      setFormHandler((prevaState) => ({
        title: { value: prevaState.title.value, isValid: titleIsValid },
        category: {
          value: prevaState.category.value,
          isValid: categoryIsValid,
        },
      }));
      return;
    }
    if (formHandler.category.value === "Gym") {
      formHandler.category.value = "barbell-outline";
    }
    if (formHandler.category.value === "General") {
      formHandler.category.value = "attach-outline";
    }
    if (formHandler.category.value === "Science") {
      formHandler.category.value = "book";
    }
    if (formHandler.category.value === "Shopping") {
      formHandler.category.value = "cart";
    }
    navigation.navigate("NewNoteView", {
      title: formHandler.title.value,
      category: formHandler.category.value,
    });
  };
  const inputHandler = (text) => {
    setFormHandler((prevState) => ({
      ...prevState,
      title: { value: text, isValid: true },
    }));
  };
  const selectHandler = (text) => {
    setFormHandler((prevState) => ({
      ...prevState,
      category: { value: text, isValid: true },
    }));
  };
  const formValid = formHandler.category.isValid && formHandler.title.isValid;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>New Note</Text>
      </View>

      <View style={styles.form}>
        <View style={{ marginTop: 20 }}>
          <Input
            title="Title"
            val={formHandler.title.value}
            fun={inputHandler}
            isValid={formHandler.title.isValid}
          />
        </View>
        <View style={styles.select}>
          <Text
            style={[
              styles.label,
              !formHandler.category.isValid && { color: "#ff6c70" },
            ]}
          >
            Category
          </Text>
          <SelectList
            search={false}
            setSelected={selectHandler}
            data={data}
            save="value"
            boxStyles={[
              styles.boxStyles,
              !formHandler.category.isValid && styles.boxStylesInvalid,
            ]}
            inputStyles={[
              { fontSize: 20, fontFamily: "Helvetica Neue" },
              !formHandler.category.isValid && { color: "#ff6c70" },
            ]}
          />
        </View>
        {!formValid && (
          <Text
            style={{
              marginTop: 35,
              fontWeight: "bold",
              color: "#ff6c70",
              fontSize: 24,
            }}
          >
            Check your inputs!
          </Text>
        )}
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
    marginTop: 30,
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
  boxStyles: {
    backgroundColor: "white",
    borderColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  boxStylesInvalid: {
    backgroundColor: "#ffc8c9",
    borderColor: "#ffa3a6",
    color: "#ff6c70",
  },
});
