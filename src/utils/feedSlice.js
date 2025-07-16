import { createSlice } from "@reduxjs/toolkit";

const feedSlice=createSlice({

    name:"feed",
    initialState:null,
    reducers:{
        addfeed:(state,action)=>action.payload,
        removeFeed:(state,action)=>null,
         removeUserFromFeed: (state, action) => {
      if (!state || !state.feed) return;
      const userIdToRemove = action.payload;
      state.feed = state.feed.filter(user => user._id !== userIdToRemove);
    },
    },
});
export const {addfeed,removeFeed,removeUserFromFeed}=feedSlice.actions;
export default feedSlice.reducer;