import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import sneakersService from '../services/SneakersService';

export const getSneakers = createAsyncThunk('GET_SNEAKER', async (_, thunkAPI) => {
  try {
    return await sneakersService.getSneakers();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const sneakersSlice = createSlice({
    name: 'sneaker',
    initialState: {
        sneaker: null,
        isError: false,
        isLoading: false,
        message: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSneakers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSneakers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.sneaker = action.payload;
            })
            .addCase(getSneakers.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
                state.message = 'An error occurred.';
                state.sneaker = null;
            });
    },
});

export default sneakersSlice.reducer;
