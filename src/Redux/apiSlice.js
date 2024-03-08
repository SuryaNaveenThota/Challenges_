import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("apiData/fetchData", async (_, { rejectWithValue }) => {
  try {
    const API_KEY = "https://www.abibliadigital.com.br/api/books";
    const response = await axios.get(API_KEY);

    if (!response.data) {
      return rejectWithValue("This Api doesn't have any data.");
    }
    if (response.status === 200) {
      if (response.data.error && response.data.error.status === 401) {
        return rejectWithValue("Unauthorized user");
      }
    } else {
      return rejectWithValue(`The Api failed with error code : ${response.status}`);
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(`An error has occured while fetching the data: ${error.message}`);
  }
});

const apiSlice = createSlice({
  name: "apiData",

  initialState: {
    data: null,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default apiSlice.reducer;
