import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {
    id: 1,
    price: "150000",
    cpu: "i3",
    ram: "4gb",
  },
  {
    id: 2,
    price: "250000",
    cpu: "i3",
    ram: "8gb",
  },
  {
    id: 3,
    price: "450000",
    cpu: "i7",
    ram: "16gb",
  },
  {
    id: 4,
    price: "350000",
    cpu: "i5",
    ram: "4gb",
  },
];

const laptopSlice = createSlice({
  name: "laptop",
  initialState,
  reducers: {
    addLaptop: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectLaptop =({laptop})=>laptop
export const {addLaptop}=laptopSlice.actions;
export default laptopSlice.reducer;