import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
// import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';
// import persistStore from "redux-persist/es/persistStore";
// import persistReducer from "redux-persist/es/persistReducer";

// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
// const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // contacts: contactsReducer,
  // filter: filterReducer,
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
// export const persistor = persistStore(store);
