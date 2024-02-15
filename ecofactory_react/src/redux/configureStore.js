import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import complaints from './slices/complaints';
import productSelection from './slices/productSelection';
import registration from './slices/registration';
import businessInfo from './slices/businessInfo';
import directorInfo from './slices/directorInfo';
import authorisePersonnel from './slices/authorisePersonnel';
import technologyProductCategoryInfo from './slices/technologyProductCategory';
import settlementDetails from './slices/settlementDetails';

const rootReducer = combineReducers({
    complaints,
    registration,
    productSelection,
    businessInfo,
    directorInfo,
    authorisePersonnel,
    technologyProductCategoryInfo,
    settlementDetails,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;