import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>React Basic App</p>
      <p>
        <Link to="/dynamic">Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default Home;