import { PayloadAction } from '@reduxjs/toolkit';
import { createSliceReducer } from '../../utils/lib/state/createSliceReducer';
import logoIcon from '../../../public/images/logo.svg';

export interface GlobalData {
  navListItems: string[];      
  logoSrc: string; 
}

const initialState = {
  navListItems: [
    "Home",
    "Portfolio", 
    "Contact Me",
  ],
  logoSrc: logoIcon,
};

const globalDataSlice = createSliceReducer('globalData', initialState, {
  getGlobalData: (state, action: PayloadAction<GlobalData>) => {
    return action.payload;
  },  
});

export const globalDataReducer = globalDataSlice.reducer;
export const { getGlobalData } = globalDataSlice.actions;



