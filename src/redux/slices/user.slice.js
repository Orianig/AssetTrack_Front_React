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
        let { payload } = action;
        state.credentials = {
          token: payload.token,
        },
          state.data = {
            //payload => informacion adicional a incluir en la accion
            id: payload.id,
            email: payload.email,
            role_id: payload.role_id,
            name: payload.name,
            surname: payload.surname,
          };
      },
      logout: (state) => {
        return {
          ...state,
          credentials: {
            token: "",
          },
          data: {
            id:"",
            email: "",
            role_id: "",
            name: "",
            surname: "",
          }
        };
        },
      },
    });
    
    export const userData = (state) => state.user;
    export const { login, logout } = userSlice.actions;
    export default userSlice.reducer;