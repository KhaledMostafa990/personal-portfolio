import { mainInfoUrl } from '@/config/apis';

// MainInfo API Interface

export interface MainInfo {
  id: string;
  name: string;
  heroTitle: string;
  heroImageUrls: string[];
  personalImageUrls: string[];
  aboutMe: string;
  email?: string;
  phone?: string;
  address?: string;
}

// Get MainInfo data from API

export const getMainInfo = async (next?: RequestInit): Promise<MainInfo | null> => {
  try {
    const response = await fetch(mainInfoUrl, next);
    const data = await response.json();
    return data.mainInfo;
  } catch (error) {
    console.error('Server Error:', error);
    return null;
  }
};
