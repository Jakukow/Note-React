import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../Buttons/CustomButton";
import { Colors } from "../Util/Colors";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, viewNote } from "../Util/noteSlice";
import { useNavigation } from "@react-navigation/native";
const SingleNoteView = ({ title, description, category_icon, id }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const notes = useSelector((state) => state.note.notes);
  const viewHandler = () => {
    const fittedNote = notes.filter((note) => note.id === id);
    navigation.navigate("ViewNote", fittedNote);
  };
  return (
    <View style={styles.container}>
      <View style={styles.categoryIcon}>
        <Ionicons name={category_icon} size={30} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textCont}>
          {description.length > 30
            ? description.substring(0, 30) + " ..."
            : description}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.noteButtons}
          name="eye"
          size={24}
          color={Colors.plusButton}
          onPress={() => {
            viewHandler();
          }}
        />
        <CustomButton
          name="create"
          size={24}
          color={Colors.plusButton}
          onPress={() => {}}
        />
        <CustomButton
          name="trash"
          size={24}
          color={Colors.plusButton}
          onPress={() => dispatch(deleteNote(id))}
        />
      </View>
    </View>
  );
};

export default SingleNoteView;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    minHeight: 150,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 8, height: 8 },
    shadowRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  categoryIcon: {
    backgroundColor: Colors.plusButton,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 40,
  },
  textContainer: {
    marginRight: 25,
    minWidth: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textCont: {
    marginTop: 3,
    fontSize: 12,
    marginLeft: 2,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
