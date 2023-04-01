import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    darkMode : boolean
}
const initialState : InitialState = {
    darkMode : true
}

const uiSlice = createSlice({
    name : 'ui',
    initialState,
    reducers : {
        changeMode : ( state ) => {
            state.darkMode =! state.darkMode
        }
    }
});

export default uiSlice.reducer;
export const { changeMode } = uiSlice.actions;