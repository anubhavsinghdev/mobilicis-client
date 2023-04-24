import React from 'react';
import DataTable from '@/components/DataTable';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <DataTable />
    </React.Fragment>
  );
};

export default Home;
