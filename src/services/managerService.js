import * as requesterService from './requesterService';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useGetAITools({
  filters,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['users', filters],
    queryFn: () => requesterService.getAITools(filters),
    onSuccess,
    onError,
  });
}
export function useDeleteTools({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: requesterService.deleteAITools,
    onSuccess,
    onError,
  });
}
export function usePostAITools({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: requesterService.postAITools,
    onSuccess,
    onError,
  });
}
