import api from './api';

export const getAITools = () => api.get(`api/tools`);
export const postAITools = (id) => api.post(`api/tools`, id);
