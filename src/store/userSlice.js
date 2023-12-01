import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'john',
  user_password:"123456",
  authenticated_user :false,
  user :'',
  message:''
}

export const userSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    userLogin: (state,{payload}) => {
    const {username,password} =payload;
      if(state.name ===username &&password===state.user_password){
        state.authenticated_user =true;
        state.user=username;
        state.message =''
      }
      else {
        state.authenticated_user =false;
        state.message ='User and password is invalid.'
      }
    },
    logout :(state)=>{
      state.authenticated_user =false;
      state.user =''
    }
  },
 
})

// Action creators are generated for each case reducer function
export const { userLogin,logout } = userSlice.actions

export default userSlice.reducer