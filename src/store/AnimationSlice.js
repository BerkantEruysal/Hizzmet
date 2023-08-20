import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  homeScreenScrollValue: 0,
};

const AnimationSlice = createSlice({
  name: 'AnmationSlice',
  initialState,
  reducers: {
    setHomeScreenScrollValue: (state, action) => {
      state.homeScreenScrollValue = action.payload;
      return state;
    },
  },
});

export const {setHomeScreenScrollValue} = AnimationSlice.actions;

export default AnimationSlice.reducer;
