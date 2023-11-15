import { Text } from "react-native";

const ViewNote = ({ route }) => {
  const note = route.params;
  console.log(note);
  return (
    <Text style={{ justifyContent: "center", alignItems: "center" }}>
      {note.title}
    </Text>
  );
};

export default ViewNote;
