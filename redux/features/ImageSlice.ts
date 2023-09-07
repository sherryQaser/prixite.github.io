import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type imageState = {
  images: Array<string>
  selectedImage: string
  loading: boolean
  saveType: string
  statePayload: any
  imgToImg: string
  imgHW: {
    height: number
    width: number
  }
  shareImg: string
  modalPayload: any
  videoUrl: string
}

const initialState = {
  images: [],
  selectedImage: '',
  loading: false,
  saveType: '',
  statePayload: {},
  imgToImg: '',
  imgHW: {
    height: 0,
    width: 0,
  },
  shareImg: '',
  modalPayload: {},
  videoUrl: '',
} as imageState

export const image = createSlice({
  name: 'image',
  initialState,
  reducers: {
    reset: () => initialState,
    addImages: (state, action: PayloadAction<string>) => {
      state.images = [action.payload]
    },
    setSelectedImage: (state, action: PayloadAction<string>) => {
      state.selectedImage = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    saveImage: (state, action: PayloadAction<string>) => {
      state.saveType = action.payload
    },
    setPayload: (state, action) => {
      state.statePayload = action.payload
    },
    setImgToImg: (state, action) => {
      state.imgToImg = action.payload
    },
    setHW: (state, action) => {
      state.imgHW = action.payload
    },
    setShareImg: (state, action) => {
      state.shareImg = action.payload
    },
    setModalPayload: (state, action) => {
      state.modalPayload = action.payload
    },
    setVideoUrl: (state, action) => {
      state.videoUrl = action.payload
    },
  },
})

export const {
  addImages,
  setSelectedImage,
  reset,
  setLoading,
  saveImage,
  setPayload,
  setImgToImg,
  setHW,
  setShareImg,
  setModalPayload,
  setVideoUrl,
} = image.actions
export default image.reducer
