import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from 'servises/api';

export const removeProduct = createAsyncThunk(
  'product/removeProduct',
  async (productId, thunkAPI) => {
    try {
      const responce = await axios.remove(`/products/${productId}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('bloodproducts/all');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getProductByQuery = createAsyncThunk(
  'product/getProductByQuery',
  async (product, { rejectWithValue }) => {
    try {
      const res = await api.get(`bloodproducts/all?title=${product}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
