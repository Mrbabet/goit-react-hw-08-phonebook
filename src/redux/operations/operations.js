import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const createUser = createAsyncThunk(
  "/register",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post("/users/login");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "/logout",
  async ({ accessToken }, thunkAPI) => {
    try {
      const response = await axios.post("/users/logout");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const userInfo = createAsyncThunk(
  "/logout",
  async ({ accessToken }, thunkAPI) => {
    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async ({ accessToken }, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add-contact",
  async ({ accessToken, name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete-contact",
  async ({ accessToken, contactId }, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  "contacts/delete-contact",
  async ({ accessToken, name, number, contactId }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
