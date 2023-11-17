import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import ms from 'ms';
import APIClient, { FetchResponse } from '../services/api-client';
import Genre from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');
// const useGenres = () => useData<Genre>('/genres');
const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: { count: genres.length, results: genres, next: null },
  });

export default useGenres;
