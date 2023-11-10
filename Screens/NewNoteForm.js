import { StyleSheet, View } from "react-native";
import { Colors } from "../Util/Colors";

const NewNoteForm = () => {
  return <View style={styles.container}></View>;
};

export default NewNoteForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 100,
    height: "100%",
    borderTopRightRadius: 50,

    backgroundColor: Colors.note,
  },
});
