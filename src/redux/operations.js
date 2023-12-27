import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL =
  'https://658c265f859b3491d3f59604.mockapi.io/api/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const responce = await axios.get('/contacts');
    return responce.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const addContact = createAsyncThunk('contacts/addContacts', async (text, thunkAPI) => {
    try {
        const responce = await axios.post('/contacts', text);
        return responce.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const deleteContact = createAsyncThunk('contact/deleteContact', async (contactId, thunkAPI) => {
    try {
        const responce = await axios.delete(`/contacts/${contactId}`);
        return responce.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})
