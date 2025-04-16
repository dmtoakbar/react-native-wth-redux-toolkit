import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api";

const initialState = {
    products: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
};


// all Products

export const allProducts = createAsyncThunk('', async (thunkApi) => {

    try {
        const response = await API.get('/products');
        console.log('products response:', response);
        return response.data;
    } catch (error) {
        console.log('getting error all products:', error);
        return thunkApi.rejectWithValue(error);
    }

});



const productSlice = createSlice({
    name: 'productSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(allProducts.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(allProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload;
        });

        builder.addCase(allProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});


export default productSlice.reducer;