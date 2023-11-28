import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const whishList = createSlice({
    name: 'whishlist',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
          return state = state.filter((item) => item.id !== action.payload
            )
        }
    }
})
export const { add, remove } = whishList.actions;
export default whishList.reducer;