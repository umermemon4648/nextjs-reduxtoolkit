import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        name: 'umer',
        email: 'umer@mail.com'
    },
    reducers:{
        update:(state, action)=>{
            state.name = action.payload.name
            state.email = action.payload.email
        }
    }
})

//  Action creators are generated for each case reducer function
export const {update} = userSlice.actions
export default userSlice.reducer