export const baseUrl = process.env.BASE_API_URL || 'http://localhost:8000';

export const apiPath = process.env.APIS_PATH || 'api';

export const mainInfoUrl = `${baseUrl}/${apiPath}/${process.env.MAIN_INFO_API_PATH}`;

export const projectsUrl = `${baseUrl}/${apiPath}/${process.env.PROJECTS_API_PATH}`;

export const contactUrl = `${baseUrl}/${apiPath}/${process.env.CONTACT_API_PATH}`;
