import BooksSlice from "./slice/books";


export const store = configureStore({
    reducer:{
        books: BooksSlice.reducer,
    }
})