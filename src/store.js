import { configureStore } from "@reduxjs/toolkit";

import questionReducer from './quizSlice'

export default configureStore({
  reducer:{
    question: questionReducer
  }
})