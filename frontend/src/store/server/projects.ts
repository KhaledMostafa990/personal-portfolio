import { projectsUrl } from '@/config/apis';
import { StaticImageData } from 'next/image';

interface AdjacentProject {
  id: any;
  name: string;
}

// MainInfo API Interface
export interface Project {
  id: string;
  name: string;
  description: string;
  mainImageUrls: string[] | StaticImageData[];
  heroImageUrls: string[] | StaticImageData[];
  showcaseImagesUrls: (string | StaticImageData)[];
  aboutProject: string;
  demo: string;
  type: string[];
  technologies: string[];
  nextProject: AdjacentProject;
  previousProject: AdjacentProject;
}

// Get Projects data from API

export const getProjects = async (next?: RequestInit): Promise<Project[] | null> => {
  try {
    const response = await fetch(projectsUrl, next);
    const data = await response.json();
    return data.projects;
  } catch (error) {
    // console.error('Server Error:', error);
    return null;
  }
};
