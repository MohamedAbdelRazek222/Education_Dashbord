import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  annonces: [],
};
// deleteAnnouncementById---------------------------------------------------------------
export const deleteAnnouncementById = createAsyncThunk(
  "annoinceList/deleteAnnouncementById",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        console.log({id});
      const response = await axios.delete(
        `http://localhost:3001/deleteAnnouncement/${id}`
      );
      console.log({ res: response.data });
      return response.data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);
// getAllAnnounces---------------------------------------------------------------
export const getAllAnnounces = createAsyncThunk(
  "annoinceList/getAllAnnounces",
  async (args, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get("http://localhost:3001/getAllAnnonses");

      return response.data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);
// -editAnnounce-----------------------------------------------------------------


export const editAnnounce = createAsyncThunk(
  "annoinceList/editAnnounce",
  async ([announceId, editedAnnounce], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
   
      const response = await axios.patch(
        `http://localhost:3001/updateAnnouncement/${announceId}`,
        editedAnnounce
      );
      
      let newAnnounceState = response.data;
      return newAnnounceState;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//-addAnnounce-----------------------------------------------------------------
export const addAnnounce = createAsyncThunk("annoinceList/addAnnounce",
async (addedAnnounce,thunkAPI)=>{

    const { rejectWithValue } = thunkAPI;

    try{
    console.log({addedAnnounce});
        const response = await axios.post(`http://localhost:3001/addUser`,addedAnnounce
            
            );
            console.log({state:initialState.annonces});
            console.log({res:response.data})
            return response.data;

        }catch(error){
    
            return rejectWithValue(error.message);
    
        }


}



)

// ------------------------------------------------------------------

const announceSlice = createSlice({
  name: "annoinceList",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllAnnounces.fulfilled]: (state, action) => {
      state.annonces = action.payload;
    },
    [deleteAnnouncementById.fulfilled]: (state, action) => {
        state.annonces.filter((ele) => {
        return ele._id !== action.payload
      });
    },
    [editAnnounce.fulfilled]:(state,action)=>{
        state.annonces=state.annonces.map((element)=>{
            return element._id===action.payload._id?action.payload:element
        })
    },
    [addAnnounce.fulfilled]:(state,action)=>{

        state.annonces.push(action.payload)
        console.log(action.payload)
    }
    },
});

export const announceReducer = announceSlice.reducer;
export const announceActions = announceSlice.actions;
