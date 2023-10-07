import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
//9535621112 , customercare@ttk.prestige.com
export default appStore;
