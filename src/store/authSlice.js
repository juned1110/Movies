import { createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebaseConfig";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError } = authSlice.actions;

export const loginWithGoogle = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await signInWithPopup(auth, provider);
    dispatch(setUser(result.user));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const signupWithEmail = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(setUser(result.user));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const loginWithEmail = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setUser(result.user));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await signOut(auth);
    dispatch(setUser(null));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default authSlice.reducer;
