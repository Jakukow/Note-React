import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";
import { View } from "react-native";
import QuillEditor, { QuillToolbar } from "react-native-cn-quill";

import TextButton from "../Buttons/TextButton";

const NewNoteView = () => {
  const _editor = React.createRef();
  const handleBackgroundPress = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={() => _editor.current.blur()}>
      <View style={styles.wrapper}>
        <QuillEditor style={styles.editor} ref={_editor} />
        <View style={styles.toolbar}>
          <QuillToolbar
            toolbar
            editor={_editor}
            options="basic"
            theme={"light"}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewNoteView;
const styles = StyleSheet.create({
  toolbar: {
    marginTop: 60,
  },
  wrapper: {
    height: "60%",
  },
  editor: {
    marginTop: 20,

    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 5,
    backgroundColor: "white",
  },
});
