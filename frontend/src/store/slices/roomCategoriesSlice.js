// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   loading: false,
//   categories: [],
//   error: null
// }

// export const roomCategorySlice = createSlice({
//   name: 'roomCategory',
//   initialState,
//   reducers: {
//     startLoading: state => {
//       state.loading = true
//     },
//     getCategoriesSuccess: (state, action) => {
//       state.loading = false
//       state.categories = action.payload
//       state.error = null
//     },
//     hasError: (state, action) => {
//       state.loading = false
//       state.error = action.payload
//     }
//   }
// })


// export const { startLoading, getCategoriesSuccess, hasError } = roomCategorySlice.actions

// export default roomCategorySlice.reducer







import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  categories: [],
  error: null,
};

export const roomCategorySlice = createSlice({
  name: 'roomCategory',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    getCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = null;
    },
    hasError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCategorySuccess: (state, action) => {
      state.loading = false;
      state.categories = state.categories.filter(category => category._id !== action.payload);
      state.error = null;
    },
  },
});

export const { startLoading, getCategoriesSuccess, hasError, deleteCategorySuccess } = roomCategorySlice.actions;

export default roomCategorySlice.reducer;
