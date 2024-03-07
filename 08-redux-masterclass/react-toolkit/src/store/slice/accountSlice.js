import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  amount: 0,
};

// https://redux-toolkit.js.org/api/createAsyncThunk
// for async actions to update state after getting data from api
// it is also a action creator but async
// auto generates child actions (pending, fulfilled, rejected)
export const fetchUserAmountById = createAsyncThunk(
  "account/getUser",
  async (userId, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8080/accounts/${userId}`
    );
    // passed as payload for child actions
    return data.amount;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1; // immer lib
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += Number(action.payload);
    },
  },
  extraReducers: (builder) => {
    // handles fulfilled action
    builder
      .addCase(fetchUserAmountById.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(fetchUserAmountById.fulfilled, (state, action) => {
        state.amount = action.payload;
        state.isFetching = false;
      })
      .addCase(fetchUserAmountById.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error;
      });
  },
});

// action creators
export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;
