import { createSlice } from "@reduxjs/toolkit";
import { Note } from "./NoteStructure";

const initialState = {
  notes: [
    {
      //date: new Date(),
      title: "Binioksowa Opowieść",
      text: "Binioks zjadł bułki z dżemem i został precelem",
      icon_category: "save",
      id: 1,
      html: "<div>",
    },
  ],
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
      notes.push(payload);
    },
  },
});

export const { deleteNote, newNote } = noteSlice.actions;

export default noteSlice.reducer;
