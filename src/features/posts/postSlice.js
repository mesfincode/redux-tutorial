
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content: 'I have heard a good news about redux'},
    {id: '2', title: 'Slice', content: 'The more i slice, the more i am satisfied'}

]

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
      addPost: ((state,action)=>{
          state.push(action.payload)
      })
    }
})

export const {addPost} = postSlice.actions;
export default postSlice.reducer;