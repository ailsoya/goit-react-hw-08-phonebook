import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token
    setAuthHeader(persistedToken)
    try {
      const res = await axios.get('/contacts')
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact)
      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
