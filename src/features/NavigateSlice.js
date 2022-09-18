import { createSlice } from "@reduxjs/toolkit";

 const navigateSlice = createSlice({
    name: "navigate",
    initialState: {
        home: true,
        coaching: false,
        signUp: false,
        form: false
    },
    reducers: {
        setHome: (state) => {
            state.home = true;
            state.coaching = false;
            state.signUp = false;
        },
        setCoaching: (state) => {
            state.home = false;
            state.coaching = true;
            state.signUp = false;
        },
        setSignUp: (state) => {
            state.home = false;
            state.coaching = false;
            state.signUp = true;
        }, 
        setForm : (state, action) => {
            state.home = false;
            state.coaching = action.payload.coaching;
            state.signUp = action.payload.signUp;
            state.form = true;
        }
    }
});

export const { setHome, setCoaching, setSignUp, setForm } = navigateSlice.actions;
export default navigateSlice.reducer
