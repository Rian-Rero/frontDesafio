import api from './api';

export const getAITools = () => api.get(`api/tools`);
export const postAITools = (body) => api.post(`api/tools`, body);
export const deleteAITools = (id) => api.delete(`api/tools/${id}`);
