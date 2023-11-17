// src/redux/reducers/aiReducer.ts
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { setAIData } from "../actions/aiActions";
import { AIData } from "../../type";

// Define the type for the initial state
interface AiReducerState {
  // Define the properties based on AIData
  insight_summary?: {
    total_queries: number;
    successful_queries: number;
    failed_queries: number;
    average_response_time: number;
  };
  category_distribution?: {
    [category: string]: number;
  };
  response_times?: {
    day_wise: { date: string; average_time: number }[];
    week_wise: { week: string; average_time: number }[];
  };
  user_satisfaction?: {
    ratings: { rating: number; count: number }[];
  };
  usage_statistics?: {
    by_platform: { [platform: string]: number };
    by_country: { [country: string]: number };
  };
}

// Define the initial state
const initialState: AiReducerState = {
  insight_summary: {
    total_queries: 0,
    successful_queries: 0,
    failed_queries: 0,
    average_response_time: 0,
  },
  category_distribution: {},
  response_times: {
    day_wise: [],
    week_wise: [],
  },
  user_satisfaction: {
    ratings: [],
  },
  usage_statistics: {
    by_platform: {},
    by_country: {},
  },
};

// Use PayloadAction to infer the payload type
const aiReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAIData, (state, action: PayloadAction<AIData>) => {
    return action.payload;
  });
});

export default aiReducer;
