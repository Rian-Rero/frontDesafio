import api from './api';

export const getAITools = async (filters = {}) => {
  const { data } = await api.get(`api/tools`, { params: filters });
  return data;
};
export const postAITools = async (body) => {
  const { data } = await api.post(`api/tools`, body);
  return data;
};
export const deleteAITools = async (id) => {
  const { data } = await api.delete(`api/tools/${id}`);
  return data;
};
