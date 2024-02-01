import * as requesterService from './requesterService';

export const useGetAITools = async () => {
  let aiTools = {};
  await requesterService.getAITools().then((res) => {
    aiTools = res.data;
  });
  return aiTools;
};
export const useDeleteTools = async (_id) => {
  try {
    const response = await requesterService.deleteAITools(_id);
    return response.data;
  } catch (error) {
    console.error('Error deleting tool', error);
    throw error;
  }
};
export const usePostAITools = async (body) => {
  try {
    const response = await requesterService.postAITools(body);
    return response.data;
  } catch (error) {
    console.error('Error posting tool', error);
    throw error;
  }
};
