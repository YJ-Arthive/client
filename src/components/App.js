import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
