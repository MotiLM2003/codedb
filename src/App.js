import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import HomePage from './components/HomePage/HomePage';
import FAQs from './components/FAQs/FAQs';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Careers from './components/Careers/Careers';
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
          {/*<Careers />*/}
          {/*<Details />*/}
          <FAQs />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
