import {
  BrowserRouter,
  Switch,
  Route,
  useLocation,
  Redirect,
} from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Details from '../components/Details/Details';
import HomePage from '../components/HomePage/HomePage';
import FAQs from '../components/FAQs/FAQs';
import Contact from '../components/Contact/Contact';
import NotFound from '../components/NotFound/NotFound';
import Careers from '../components/Careers/Careers';

const AppRouter = ({ isUserAuthenticated }) => {
  const renderUserRouter = () => {
    return (
      <BrowserRouter>
        <section>
          <Header />
        </section>

        <section style={{ flexGrow: 1 }}>
          <div className='main-content'>
            <Switch>
              <PublicRoute exact path='/' component={HomePage} />
              <PublicRoute path='/careers' component={Careers} />
              <PublicRoute path='/details' component={Details} />
              <PublicRoute path='/contact' component={Contact} />
              <PublicRoute path='/faqs' component={FAQs} />
              <PublicRoute path='*' component={NotFound} />
            </Switch>
          </div>
        </section>

        <section>
          <Footer />
        </section>
      </BrowserRouter>
    );
  };

  return renderUserRouter();
};

export default AppRouter;
