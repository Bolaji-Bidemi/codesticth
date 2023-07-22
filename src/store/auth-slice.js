import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  Message: null,
  error: null,
  loading: false,
};

// export const signup = createAsyncThunk("signup", async(userDetails) => {
//   try {
//     const response = await fetch("http://localhost:3005/users/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userDetails),
//     });

//     if (response.status !== 200) {
//       // Handle non-200 response codes
//       throw new Error("Bad response from server");
//     }

//     const data = await response.json();

//     return data;
//   } catch (error) {
//     // Handle network errors or exceptions
//     console.error("Error occurred during signup:", error);
//     throw error;
//   }
// });


export const signup = createAsyncThunk(
  "signup",
  async (userDetails) => {





    const response = await fetch("http://localhost:3005/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    const data = await response.json();

    return data;
   
  }
);

export const login = createAsyncThunk(
  "login",
  async (userDetails) => {
    try {
      const response = await fetch("http://localhost:3005/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      if (response.status !== 200) {
        // Handle non-200 response codes
        throw new Error("Bad response from server");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      // Handle network errors or exceptions
      console.error("Error occurred during login:", error);
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user = localStorage.getItem("user");
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("Message");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.Message = payload.Message;
      localStorage.setItem("Message", JSON.stringify(payload.Message));
    });

    builder.addCase(signup.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload.Error;
    });

    /******login******* */
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = payload.user;
      state.Message = payload.Message;
      // localStorage.setItem("user", JSON.stringify(payload.userExist));
      // localStorage.setItem("Message", JSON.stringify(payload.Message));
   
    });

    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
      // state.error = true
      state.error = payload.Error.message
      localStorage.setItem("error", JSON.stringify(payload.Error.message));
    });
  },
});
export const authActions = authSlice.actions;

export default authSlice;
