// src/redux/actions/aiActions.ts
import { createAction } from "@reduxjs/toolkit";
import { AIData } from "../../type";

export const setAIData = createAction<AIData>("SET_AI_DATA");
