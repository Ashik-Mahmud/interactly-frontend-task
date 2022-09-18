import { configureStore } from "@reduxjs/toolkit";
import NavigateSlice from "../features/NavigateSlice";

const store = configureStore({
    reducer: {
        navigate: NavigateSlice
    }
})

export default store;