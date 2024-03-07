import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productAPI";

const initialState = {
  products: [],
  status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(fetchAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// it will auto create action creators and we just have to handle them in reducer
export const fetchAsync = createAsyncThunk("product/fetchProduct", async () => {
  const response = await fetchProducts();
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = productSlice.actions;
export default productSlice.reducer;
