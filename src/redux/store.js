import { configureStore } from "@reduxjs/toolkit";

import { todoSlice } from "./slice";

export const store = configureStore({
  reducer:todoSlice.reducer,
  
});

// const reducer = {
//   todo: todoReducer,
// };

// const store = configureStore({
//   reducer: reducer,
//   devTools: true,
// });

// export default store;
