import './App.css'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import PublicApp from './components/public interface/PublicApp';
// import PrivateApp from './components/private interface/PrivateApp';
// import AdminApp from './components/admin interface/AdminApp';
// import Error404 from './components/error/Error404';
// import Error403 from './components/error/Error403';
// import AllJob from './components/job/all job/AllJob';
// import Loading from './components/loading/Loading';
// import Profile from './components/private interface/profile/PrivateProfile';
import PublicNavBar from './components/public interface/public navbar/PublicNavBar';
import PrivateNavBar from './components/private interface/private navbar/PrivateNavBar';
import AdminNavBar from './components/admin interface/admin navbar/AdminNavBar';

import PublicHome from './components/public interface/public home/PublicHome';
import PrivateHome from './components/private interface/private home/PrivateHome';
import AdminHome from './components/admin interface/admin home/AdminHome';

import PublicAbout from './components/public interface/public about/PublicAbout';

import PublicServises from './components/public interface/public services/PublicServises';

import PrivateProfile from './components/private interface/profile/PrivateProfile';
import User from './components/public interface/user/User';
import AdminProfile from './components/admin interface/profile/AdminProfile';

import ActivationPage from './components/public interface/user/ActivationPage';
import PrivateContact from './components/private interface/private contact/PrivateContact';
import PublicContact from './components/public interface/public contact/PublicContact';

import AdminContact from './components/admin interface/admin contact/AdminContact';

import Footer from './components/footer/Footer';

function App() {
  const user = useSelector((state) => state.userReducer.user);
  const token = localStorage.getItem('token');
  return (
    <div>
      {
      ((user) && (token) && (user.role === 'user') && (user.isActive === true))?(<PrivateNavBar />):
      ((user) && (token) && (user.role === 'admin') && (user.isActive === true))?(<AdminNavBar />):
      (<PublicNavBar />)
      }
      <Router>
        <Routes>
          <Route path="/"
            element={
            ((user) && (token) && (user.role === 'user') && (user.isActive === true))?(<PrivateHome />):
            ((user) && (token) && (user.role === 'admin') && (user.isActive === true))?(<AdminHome />):
            (<PublicHome />)
          } />
          <Route path="/:userName" 
          element={
            ((user) && (token) && (user.role === 'user') && (user.isActive === true))?(<PrivateProfile />):
            ((user) && (token) && (user.role === 'admin') && (user.isActive === true))?(<AdminProfile />):
            (<ActivationPage />)
          } />
          
          <Route path={`/user`} element={<User />}/>
          <Route path="/about" element={<PublicAbout />} />
          <Route path="/servises" element={<PublicServises />} />
          <Route path="/contact"
            element={
            ((user) && (token) && (user.role === 'user') && (user.isActive === true))?(<PrivateContact />):
            ((user) && (token) && (user.role === 'admin') && (user.isActive === true))?(<AdminContact />):
            (<PublicContact />)
            } />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
