import { useLayoutEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import { Colors } from "../Util/Colors";
import TextButton from "../Buttons/TextButton";
import { htmlToText } from "html-to-text";
import { useDispatch } from "react-redux";
import { editNote, newNote } from "../Util/noteSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function NewNoteView({ navigation, route }) {
  const note = route.params[0];
  const richText = useRef();
  const dispatch = useDispatch();

  const [descHTML, setDescHTML] = useState("");
  useLayoutEffect(() => {
    setDescHTML(note.html);
  }, []);

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
    let text = htmlToText(descHTML);
    const indexSecondNewLine = text.indexOf("\n", text.indexOf("\n") + 1);

    if (indexSecondNewLine !== -1) {
      text = text.slice(0, indexSecondNewLine);
    }
    if (!text) return;
    const date = new Date().toISOString();
    const EditedNote = {
      text: text,
      html: descHTML,
      date: date,
      id: note.id,
    };

    dispatch(editNote(EditedNote));
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
          initialContentHTML={note.html}
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
