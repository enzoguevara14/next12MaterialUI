import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import Dashboard from '../components/dashboard';

const HomePage: NextPage = () => {
  return (
    <Layout>
     <Dashboard/>
    </Layout>
  )
}

export default HomePage;
