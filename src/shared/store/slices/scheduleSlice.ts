import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    { title: "event 1", date: "2020-06-05" },
    { title: "event 2", date: "2019-04-02" },
  ],
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
});

export default scheduleSlice.reducer;
