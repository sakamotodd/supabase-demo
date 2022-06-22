import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout } from '../components/Layout';
import Links from '../components/Links';
import { Notice, Task } from '../types/types';
import { supabase } from '../utils/supabase';

type StaticProps = {
  tasks: Task[];
  notices: Notice[];
};

const Ssr: NextPage<StaticProps> = ({ tasks, notices }) => {
  const router = useRouter();

  return (
    <Layout title="SSR">
      <p className="mb-3 text-blue-500">SSR</p>
      <ul className="mb-3">
        {tasks?.map((task) => {
          return (
            <li key={task.id}>
              <p className="text-lg font-extrabold">{task.title}</p>
            </li>
          );
        })}
      </ul>
      <ul className="mb-3">
        {notices.map((notice) => {
          return (
            <li key={notice.id}>
              <p className="text-lg font-extrabold">{notice.content}</p>
            </li>
          );
        })}
      </ul>
        <Links/>
    </Layout>
  );
};
export default Ssr;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('getServerSideProps走りました。');
  const { data: tasks } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: true });
  const { data: notices } = await supabase
    .from('notices')
    .select('*')
    .order('created_at', { ascending: true });
  return { props: { tasks, notices } };
};
