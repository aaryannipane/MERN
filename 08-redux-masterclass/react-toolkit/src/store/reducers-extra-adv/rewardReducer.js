// if we want to create reducer and action ourself
// without help of slice we can do this

import { createAction, createReducer } from "@reduxjs/toolkit";

// action creator (value)=> ({type: "reward/increment", payload: value})
export const increment = createAction("reward/increment");
const initialState = {
  point: 15,
};

const rewardReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.point += 1;
  });
});

export default rewardReducer;
