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
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNotes: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
      state.messageSaved = `${action.payload.title} se actualizo correctamente.`;
    },
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
