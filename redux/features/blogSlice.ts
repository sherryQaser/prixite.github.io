import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  allBlogs: [],
  singleBlog: '',
}

export const blog = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    reset: () => initialState,
    setAllBlogs: (state, action: PayloadAction<[]>) => {
      state.allBlogs = action.payload
    },
    getSingleBlog: (state, action: PayloadAction<string>) => {
      state.singleBlog = action.payload
    },
  },
})

export const { setAllBlogs, getSingleBlog } = blog.actions
export default blog.reducer
