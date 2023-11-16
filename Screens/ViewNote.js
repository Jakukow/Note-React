import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { Colors } from "../Util/Colors";

const ViewNote = ({ route }) => {
  const note = route.params[0];
  return (
    <View style={styles.container}>
      <View style={{ height: "80%", width: "90%", marginTop: 25 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{note.title}</Text>
        </View>
        <WebView
          style={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
          source={{
            html: `<div style="padding:50;font-size:35">${note.html}</div>`,
          }}
        />
      </View>
    </View>
  );
};

export default ViewNote;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
    height: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: Colors.note,
  },
  titleContainer: {
    backgroundColor: Colors.background,
    height: "7%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
});
