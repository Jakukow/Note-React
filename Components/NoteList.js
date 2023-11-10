import { FlatList } from "react-native";

import SingleNoteView from "./SingleNoteView";
import { useSelector } from "react-redux";
const NoteList = () => {
  const notes = useSelector((state) => state.note.notes);

  return (
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
};
export default NoteList;
