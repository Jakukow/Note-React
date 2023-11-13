import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import { Colors } from "../Util/Colors";
import TextButton from "../Buttons/TextButton";
export default function NewNoteView() {
  const richText = useRef();

  const [descHTML, setDescHTML] = useState("");

  const richTextHandle = (descriptionText) => {
    if (descriptionText) {
      setDescHTML(descriptionText);
    } else {
      setDescHTML("");
    }
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
        <TextButton>Save</TextButton>
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
