import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import { Colors } from "../Util/Colors";
import TextButton from "../Buttons/TextButton";
import { htmlToText } from "html-to-text";
import { Note } from "../Util/NoteStructure";
import { useDispatch } from "react-redux";
import { newNote } from "../Util/noteSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function NewNoteView({ navigation, route }) {
  const richText = useRef();
  const dispatch = useDispatch();

  const [descHTML, setDescHTML] = useState("");

  const richTextHandle = (descriptionText) => {
    if (descriptionText) {
      setDescHTML(descriptionText);
    } else {
      setDescHTML("");
    }
  };
  const SaveHandler = () => {
    const replaceHTML = descHTML
      .replace(/<(.|)*?>/g, "")
      .replace("\n", " ")
      .trim();
    const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();
    const text = htmlToText(descHTML).replaceAll("\n", ", ");
    if (!text) return;
    const date = new Date().toISOString();
    const createdNote = {
      title: route.params.title,
      text: text,
      html: descHTML,
      icon_category: route.params.category,
      id: nanoid(),
      date: date,
    };

    dispatch(newNote(createdNote));
    navigation.navigate("NoteList");
  };

  return (
    <View style={styles.container}>
      <View style={styles.richTextContainer}>
        <RichToolbar
          editor={richText}
          iconTint="white"
          actions={[
            actions.setBold,
            actions.setItalic,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.insertLink,
            actions.setStrikethrough,
            actions.setUnderline,
            actions.checkboxList,
          ]}
          style={styles.richTextToolbarStyle}
        />
        <RichEditor
          initialFocus={true}
          scrollEnabled={true}
          ref={richText}
          onChange={richTextHandle}
          placeholder="Type here..."
          style={styles.richTextEditorStyle}
          initialHeight={360}
        />
        <TextButton fun={SaveHandler}>Save</TextButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },

  richTextContainer: {
    width: "100%",
    marginTop: 50,
  },

  richTextEditorStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 360,
    maxHeight: 360,
    fontSize: 20,
  },

  richTextToolbarStyle: {
    backgroundColor: Colors.plusButton,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
