import { configureStore  } from '@reduxjs/toolkit'
// import user from 'views/Login/features/userSlice'


const store = configureStore({
  reducer: {
    // user,

  },
  devTools: process.env.NODE_ENV !== 'production',
})
export default store