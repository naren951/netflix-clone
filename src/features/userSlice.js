import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, actions) => {
            state.user = actions.payload;
        },
        logout: (state, actions) => {
            state.user = null;
        }
    }
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions
export const selectUser = (state) => state.user.user

export default userSlice.reducer;