import { createSlice } from "@reduxjs/toolkit";

const BooksSlice = createSlice({
  name: "book",
  initialState: {
    book: {
      detail:false,
      book:null
    },
  },
  reducers: {
    addBook:(state,action)=>{
      console.log(action)
      state.book.detail = true
      state.book.book=action.payload
    },
    closeBook:(state)=>{
      state.book.detail = false
      state.book.book=null
    }
  },
});

export default BooksSlice;
export const {addBook, closeBook} =BooksSlice.actions 
