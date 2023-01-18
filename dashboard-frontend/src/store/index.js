import { configureStore } from "@reduxjs/toolkit";
import { announceReducer } from "./redusers/Announce.slice";
import { quizReducer } from "./redusers/QuizSlice";
export const store=configureStore({
    reducer:{
        quizesList:quizReducer,
        announceList:announceReducer
    }
})