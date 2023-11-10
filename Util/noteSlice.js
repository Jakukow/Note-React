import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      title: "Binioksowa Opowieść",
      text: "Binioks zjadł bułki z dżemem i został precelem",
      icon_category: "save",
      id: 1,
    },
    {
      title: "Xddd",
      text: "hah",
      icon_category: "save",
      id: 2,
    },
    {
      title: "Xddd",
      text: "hah",
      icon_category: "save",
      id: 3,
    },
    {
      title: "Xddd",
      text: "hah",
      icon_category: "save",
      id: 4,
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
  },
});

export const { deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
