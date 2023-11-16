import { createSlice } from "@reduxjs/toolkit";
import { Note } from "./NoteStructure";
import { useNavigation } from "@react-navigation/native";
const initialState = {
  notes: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    deleteNote: ({ notes }, { payload }) => {
      notes.splice(
        notes.findIndex((note) => note.id === payload),
        1
      );
    },
    newNote: ({ notes }, { payload }) => {
      notes.unshift(payload);
    },
    editNote: ({ notes }, { payload }) => {
      const idx = notes.findIndex((note) => note.id === payload.id);
      notes[idx] = {
        ...notes[idx],
        text: payload.text,
        html: payload.html,
        date: payload.date,
      };
    },
    sortNotes: ({ notes }) => {
      notes.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
});

export const { deleteNote, newNote, editNote, sortNotes } = noteSlice.actions;

export default noteSlice.reducer;
