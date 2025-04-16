import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api";

const initialState = {
    userData: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
};


// login
export const login = createAsyncThunk('login', async (params, thunkApi) => {
    console.log('login -params:', params);
    try {

        const response = await API.post('/auth/login', params)
        console.log('login response:', response)
        return response.data; 
         //return thunkApi.fulfillWithValue('custom data'); // if want a custom data return

    } catch (error) {
        console.log('login -error: ', error);
        return thunkApi.rejectWithValue(error);
    }
});

const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      // login cases
      builder.addCase(login.pending, (state) => {
        state.isLoading = true;
      });

      builder.addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = action.payload;
      });

      builder.addCase(login.rejected, (state, action) => {
         state.isLoading = false;
         state.isError = true;
      });
    }
});

export default authSlice.reducer;