import { FlatList } from "react-native";
import { NOTES } from "../Util/DUMMY_DATA";
import SingleNoteView from "./SingleNoteView";

const NoteList = () => {
  return (
    <FlatList
      data={NOTES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <SingleNoteView
          title={item.title}
          description={item.text}
          category_icon={item.icon_category}
        />
      )}
    />
  );
};
export default NoteList;
