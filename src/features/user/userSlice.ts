import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    name : string
    email : string
    image : string
}
const initialState : InitialState = {
    name : '',
    email : '',
    image : ''
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        createUser : ( state, action : PayloadAction<InitialState>) => {
            state.name = action.payload.name,
            state.email = action.payload.email,
            state.image = action.payload.image
        }
    }
});

export default userSlice.reducer;
export const { createUser } = userSlice.actions;