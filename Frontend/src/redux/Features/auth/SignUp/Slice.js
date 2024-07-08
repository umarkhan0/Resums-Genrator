import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../../APIService";
export const signUp = createAsyncThunk("signUp", async (credentials) => {
    try {
        const response = await apiService.post('signup', credentials);
        return response.data; 
    } catch (error) {
      throw error.response.data;
    }
});

const signUPSlice = createSlice({
    name: "signUp",
    initialState: {
        isLoading: false,
        success: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.isLoading = true;
                state.error = false; 
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.isLoading = false;
                // localStorage.setItem("Sign" , action.payload.success)
                state.success = action.payload;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default signUPSlice.reducer;
