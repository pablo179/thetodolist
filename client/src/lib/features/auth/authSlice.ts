import { createAppSlice } from "@/lib/createAppSlice";
import { loginin, signup as signupRequest } from "./authApi";
import { PayloadAction } from "@reduxjs/toolkit";

export interface AuthSliceState {
  token: string | null;
  user: any;
  fetching: boolean;
  error: string | null;
}

const initialState: AuthSliceState = {
  token: null,
  user: null,
  fetching: false,
  error: null,
};

export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: (create) => ({
    login: create.asyncThunk(
      async (data: { email: string; password: string }) => {
        return await loginin(data.email, data.password);
      },
      {
        pending: (state) => {
          state.fetching = true;
        },
        fulfilled: (state, action) => {
          state.fetching = false;
          state.token = action.payload.token;
          state.user = action.payload.user;
        },
        rejected: (state) => {
          state.fetching = false;
          state.error = "Invalid email or password";
        },
      }
    ),
    signup: create.asyncThunk(
      async (data: { email: string; password: string; username: string }) => {
        return await signupRequest(data.email, data.password, data.username);
      },
      {
        pending: (state) => {
          state.fetching = true;
        },
        fulfilled: (state, action) => {
          state.fetching = false;
          state.token = action.payload.token;
          state.user = action.payload.user;
        },
        rejected: (state) => {
          state.fetching = false;
          state.error = "Invalid email or password";
        },
      }
    ),
    logout: create.reducer((state) => {
      state.token = null;
      state.user = null;
    }),
    setError: create.reducer((state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }),
  }),
  selectors: {
    isAuthenticated: (state) => !!state.token,
    selectError: (state) => state.error,
    selectIsFetching: (state) => state.fetching,
  },
});

export const { login, signup, logout, setError } = authSlice.actions;

export const { isAuthenticated, selectError, selectIsFetching } =
  authSlice.selectors;
