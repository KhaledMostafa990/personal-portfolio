import { PayloadAction } from '@reduxjs/toolkit';

import { createSliceReducer } from '@/utils/lib/state/createSliceReducer';
import { globalClientStaticData } from './ConstantData';

export interface GlobalData {
  navListItems: string[];
  socialMediaIcons: any[];
  contactCtaText: string;
  contactHeading: string;
}

const globalDataSlice = createSliceReducer('globalData', globalClientStaticData, {
  getGlobalData: (state, action: PayloadAction<GlobalData>) => {
    return action.payload;
  },
});

export const globalDataReducer = globalDataSlice.reducer;
export const { getGlobalData } = globalDataSlice.actions;
