import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hidden: true,
};

export const cartToggleSlice = createSlice({
  name: "toggle",
  initialState: initialState,
  reducers: {
    setToggle: (state, action) => {
      state.hidden = !state.hidden;
    },
  },
});
