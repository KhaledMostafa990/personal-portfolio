import { PayloadAction } from '@reduxjs/toolkit';

import { createSliceReducer } from '@/utils/lib/state/createSliceReducer';
import { globalDataState } from './mockData';

export interface GlobalData {
  socialMediaIcons: any[];
  navListItems: string[];
  logoSrc: string;
  contactCtaText: string;
  contactHeading: string;
  projectsData: Project[];
}

interface AdjacentProject {
  id: any;
  name: string;
}

export interface Project {
  id: any;
  name: string;
  description: string;
  mainImage: any;
  heroImage: any;
  showcaseImagesUrls: any[];
  aboutProject: string;
  demo: string;
  builtWith: string[];
  next: AdjacentProject;
  prev: AdjacentProject;
}

const globalDataSlice = createSliceReducer('globalData', globalDataState, {
  getGlobalData: (state, action: PayloadAction<GlobalData>) => {
    return action.payload;
  },
});

export const globalDataReducer = globalDataSlice.reducer;
export const { getGlobalData } = globalDataSlice.actions;
