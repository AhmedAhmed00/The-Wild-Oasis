
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import NewUsers from './pages/Users';
import Cabins from './pages/Cabins';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Settings from './pages/Settings';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';





function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route element={<AppLayout />} >

            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="users" element={<NewUsers />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="account" element={<Account />} />
            <Route path="account" element={<Account />} />
            <Route path="login" element={<Login />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />

          </Route>

        </Routes>
      </BrowserRouter>



    </>

  )




}

export default App
