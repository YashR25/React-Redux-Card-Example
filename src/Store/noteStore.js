import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "../Slices/noteSlice";


export default configureStore({
    reducer: {
        noteReducer: noteSlice,
    },
})