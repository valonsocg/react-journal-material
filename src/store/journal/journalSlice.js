import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: "journal",
  //declaracion del estado inicial de las variables
  initialState: {
    isSaving: false,
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
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
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
  savingNewNote,
} = journalSlice.actions;
