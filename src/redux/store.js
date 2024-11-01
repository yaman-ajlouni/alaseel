import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './reducers/menuReducer';
import homeReducer from './reducers/homeReducer';
import cateringReducer from './reducers/cateringReducer';
import footerReducer from './reducers/footerReducer';



export const store = configureStore({
  reducer: {
    menu: menuReducer,
    home: homeReducer,
    catering: cateringReducer,
    footer: footerReducer,

  },
});

export default store;
