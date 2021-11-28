import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface EventStateProps {
  eventType: number;
}

const initState: EventStateProps = {
  eventType: 1
};



const genEvent = createAsyncThunk(
  "/game-genevent",
  async (id, thunkApi) => {
   thunkApi.dispatch(EventSlice.actions.recordEventData(1))
  }
)

const EventSlice = createSlice({
  name: "/eventSlice",
  initialState: initState,
  reducers: {
    recordEventData: (state, context) => {
      state.eventType = context.payload;
    },
  },
  extraReducers: {},
});

export {
  EventSlice,
  genEvent
}

export type { EventStateProps }
