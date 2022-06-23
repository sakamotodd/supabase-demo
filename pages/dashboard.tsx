import { LogoutIcon } from '@heroicons/react/solid';
import { NextPage } from 'next';
import { useQueryClient } from 'react-query';
import { Layout } from '../components/Layout';
import { supabase } from '../utils/supabase';

const Dashboard: NextPage = () => {
  const queryClient = useQueryClient();
  const signOut = () => {
    supabase.auth.signOut();
    // queryClient.removeQueries('todos');
    // queryClient.removeQueries('notices');
  };
  return (
    <Layout title="Dashboard">
      <LogoutIcon className="mb-6 h-6 w-6 cursor-pointer text-blue-500" onClick={signOut} />
    </Layout>
  );
};

export default Dashboard;
