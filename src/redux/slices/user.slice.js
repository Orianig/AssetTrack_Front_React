import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
      credentials: {
        token: "",
      },
      data: {
        id: "",
        email: "",
        role_id: "",
        name: "",
        surname: "",
        employee_number:""
      },
    },
    reducers: {
        login: (state, action) => {
          const { token, data } = action.payload;
          state.credentials.token = token;
          state.data = data;
        },
        logout: (state) => {
          state.credentials.token = "";
          state.data = {
            id: "",
            email: "",
            role_id: "",
            name: "",
            surname: "",
          };
        },
      },
    });
    
    export const userData = (state) => state.user;
    export const { login, logout } = userSlice.actions;
    export default userSlice.reducer;