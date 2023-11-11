import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/";
import NoteList from "../Components/NoteList";
import PlusButton from "../Buttons/PlusButton";
import { Colors } from "../Util/Colors";

const NoteListsView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Your Notes</Text>
      </View>
      <NoteList />
      <View style={styles.plusContainer}>
        <PlusButton />
      </View>
    </View>
  );
};

export default NoteListsView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 100,
    height: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: Colors.note,
  },
  textContainer: {
    width: "100%",
    padding: 30,
  },
  text: {
    fontSize: 25,
    fontFamily: "Helvetica Neue",
    color: "grey",
    fontWeight: "700",
  },
  plusContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
    backgroundColor: "white",
    marginTop: 20,

    marginBottom: 100,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,

    position: "relative",
  },
});
