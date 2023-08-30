
import { configureStore } from '@reduxjs/toolkit'
import sneakersSlice from './sneakers/sneakers/sneakersslice'

export const store = configureStore({
    reducer: {
      sneakers: sneakersSlice,
    },
  });