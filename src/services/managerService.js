import * as requesterService from './requesterService';

export const useGetAITools = async () => {
  let aiTools = {};
  await requesterService.getAITools().then((res) => {
    aiTools = res.data;
    console.log('✌️aiTools --->', aiTools);
  });
  return { aiTools };
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
