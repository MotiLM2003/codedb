import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import HomePage from './components/HomePage/HomePage';
const App = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <section>
        <Header />
      </section>
      <section style={{ flexGrow: 1 }}>
        <div className='main-content'>
          <HomePage />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
