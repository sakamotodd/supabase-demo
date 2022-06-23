import { useQuery } from 'react-query';
import { Task } from '../types/types';
import { supabase } from '../utils/supabase';

const useQueryTasks = () => {
  const getTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };
  return useQuery<Task[], Error>({
    queryKey: 'todos',
    queryFn: getTasks,
    staleTime: Infinity,
  });
};

export default useQueryTasks;
