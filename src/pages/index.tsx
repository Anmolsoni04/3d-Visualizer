import React from 'react';
import ThreeDViewer from '../components/ThreeDViewer';

const Home: React.FC = () => {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <ThreeDViewer />
    </div>
  );
};

export default Home;
