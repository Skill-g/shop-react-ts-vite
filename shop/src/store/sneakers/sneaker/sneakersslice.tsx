import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import sneakersService from '../services/SneakersService';

export const getSneaker = createAsyncThunk('GET_SNEAKER', async (id, thunkAPI) => {
  try {
    return await sneakersService.getSneaker(id);
  } catch(error) {
     return thunkAPI.rejectWithValue(error)
  }
});

export const createSneaker = createAsyncThunk('CREATE_SNEAKER', async (sneakerData, thunkAPI) => {
  try {
    return await sneakersService.createsneake(sneakerData);
  } catch(error) {
     return thunkAPI.rejectWithValue(error)
  }
});


const sneakerSlice = createSlice({
  name: 'sneaker',
  initialState: {
    sneaker: null,
    isError: false,
    isLoading: false,
    message: '',
    errors: null
  },
  reducers: {
    resetSneakerErrors: (state) => {
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSneaker.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSneaker.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sneaker = action.payload[0];
      })
      .addCase(getSneaker.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = 'get sneaker';
        state.sneaker = null;
      })
      .addCase(getSneaker.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(getSneaker.fulfilled, (state) => {
        state.isLoading = false;
        state.errors = null;
      })
      .addCase(getSneaker.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.errors = null;
      })
  }
});


export default sneakerSlice.reducer;