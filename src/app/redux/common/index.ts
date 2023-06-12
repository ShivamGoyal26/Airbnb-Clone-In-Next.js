"use client";

import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    loading: false,
    modalLoading: false,
  },
  reducers: {
    setModalLoading(state, action) {
      state.modalLoading = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading, setModalLoading } = commonSlice.actions;

export default commonSlice.reducer;
