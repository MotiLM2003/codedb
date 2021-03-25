import React from 'react';

import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <AppRouter />
    </div>
  );
};

export default App;
