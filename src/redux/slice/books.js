import { createSlice } from "@reduxjs/toolkit";

const BooksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {},
});

export default BooksSlice;
