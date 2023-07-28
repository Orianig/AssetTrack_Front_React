import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
      //se mete en credentials y data para devolver el nuevo estado en estas
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

          console.log("Login Action Payload:", action.payload);
      console.log("Previous State:", state);

          state.credentials.token = token;
          state.data = data;

          console.log("Updated State:", state);

        },
        logout: (state) => {

            console.log("Logout Action Triggered");
      console.log("Previous State:", state); 
          state.credentials.token = "";
          state.data = {
            id: "",
            email: "",
            role_id: "",
            name: "",
            surname: "",
          };

          console.log("Updated State:", state);
        },
      },
    });
    
    export const { login, logout } = userSlice.actions;
    export default userSlice.reducer;