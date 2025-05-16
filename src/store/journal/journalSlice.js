import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: "journal",
  //declaracion del estado inicial de las variables
  initialState: {
    isSaving: true,
    messageSaved: "",
    notes: [],
    active: null,
    // active: {
    //   id: "abcd123",
    //   title: "",
    //   body: "",
    //   date: 12345,
    //   imageUrls: [],
    // },
  },
  //funciones que modifican el estado
  reducers: {
    addNewEmptyNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNotes: (state, action) => {},
    setSaving: (state, action) => {},
    updateNotes: (state, action) => {},
    deleteNodeById: (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNotes,
  deleteNodeById,
} = journalSlice.actions;
