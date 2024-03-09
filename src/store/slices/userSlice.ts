import { createSlice } from "@reduxjs/toolkit";
import { Store } from "../../types/store";



const initialState:Store = {
    userDetails: {
        name: "",
        email: "",
        phone: "",
    }
};
export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.userDetails = {
                ...state.userDetails,
                ...action.payload,
            };
        },
    },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
