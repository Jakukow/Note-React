import { FlatList, StyleSheet, Text, View } from "react-native";

import SingleNoteView from "./SingleNoteView";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { sortNotes } from "../Util/noteSlice";

const NoteList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.notes);
  useLayoutEffect(() => {
    dispatch(sortNotes());
  }, [notes]);

  let content = (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <SingleNoteView
          title={item.title}
          description={item.text}
          category_icon={item.icon_category}
          id={item.id}
        />
      )}
    />
  );
  if (notes.length === 0) {
    content = (
      <View style={styles.textCont}>
        <Text style={styles.txt}>Add new note!</Text>
      </View>
    );
  }
  return content;
};
export default NoteList;

const styles = StyleSheet.create({
  textCont: {
    alignSelf: "center",
    marginBottom: 40,
    opacity: 0.5,
  },
  txt: {
    fontSize: 35,
    color: "grey",
    fontWeight: "700",
  },
});
