// src/redux/reducers/aiReducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { setAIData } from '../actions/aiActions';
import { AIData } from '../../type';

const initialState: any = {     //use AIData types
};

const aiReducer = createReducer(initialState, builder => {
  builder.addCase(setAIData, (state, action) => {
    return action.payload;
  });
});

export default aiReducer;
