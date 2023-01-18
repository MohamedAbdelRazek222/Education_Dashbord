import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={

quizes:[]

}
// getAllQuizes-----------------------------------------------------
export const getAllQuizes=createAsyncThunk ('quiz/getAllQuizes',async(args,thunkApi)=>{
    const {rejectWithValue}=thunkApi
    try{
    
    const response=await axios.get('http://localhost:3001/getAllQuizes')
    
    return response.data
    }catch(err){
    
    rejectWithValue(err.message)
    }
    })
// deleteAnnouncementById---------------------------------------------------------------
export const deleteQuizById = createAsyncThunk(
    "quiz/deleteQuizById",
    async (id, thunkApi) => {
      const { rejectWithValue } = thunkApi;
      try {
          console.log({id});
        const response = await axios.delete(
          `http://localhost:3001/deleteQuize/${id}`
        );
        console.log({ res: response.data });
        return response.data;
      } catch (err) {
        rejectWithValue(err.message);
      }
    }
  );
// -editAnnounce-----------------------------------------------------------------


export const editQuiz = createAsyncThunk(
    "quiz/editQuiz",
    async ([quizId, editedquiz], thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
     
        const response = await axios.patch(
          `http://localhost:3001/updateQuize/${quizId}`,
          editedquiz
        );
        
        let newQuizState = response.data;
        return newQuizState;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
//-addQuiz-----------------------------------------------------------------
export const addQuiz = createAsyncThunk("quiz/addQuiz",
async (addedQuiz,thunkAPI)=>{

    const { rejectWithValue } = thunkAPI;

    try{
        const response = await axios.post(`http://localhost:3001/addQuiz`,addedQuiz
            
            );
            
            return response.data;

        }catch(error){
    
            return rejectWithValue(error.message);
    
        }


}





)

// ------------------------------------------------------------------

const QuizSlice=createSlice({

name:'quiz',
initialState,
reducers:{},
extraReducers:{
[getAllQuizes.fulfilled]:(state,action)=>{

    state.quizes=action.payload
    
    },
    [deleteQuizById.fulfilled]: (state, action) => {
        state.quizes.filter((ele) => {
        return ele._id !== action.payload
      });
    },
    [editQuiz.fulfilled]:(state,action)=>{
        state.quizes=state.annonces.map((element)=>{
            return element._id===action.payload._id?action.payload:element
        })
    },
    [addQuiz.fulfilled]:(state,action)=>{

        state.quizes.push(action.payload)
        console.log(action.payload)
    }

}
})

export const quizReducer=QuizSlice.reducer
export const quizActions=QuizSlice.actions