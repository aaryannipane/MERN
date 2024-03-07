import { createAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    point: 0
}

/* same action name as present in account reducer 
for making changes in bonus according to amount added in account */
const incrementByAmount = createAction("account/incrementByAmount");

const bonusSlice = createSlice({
    name: "bonus",
    initialState,
    reducers: {
        // reducer config here
        increment: (state) => {
            state.point += 1; // immer lib
          },
          decrement: (state) => {
            state.point -= 1;
          },
    },
    extraReducers: (builder)=>{
        // when amount added in account is >= 100 we increase bonus
        builder.addCase(incrementByAmount, (state, action)=>{
            if(action.payload >= 100){
                state.point += 1;
            }
        })
    }
})

// action creators  (action name will be --> bonus/increment, bonus/decrement)
export const {increment, decrement} = bonusSlice.actions;

// reducers for bonus
export default bonusSlice.reducer;