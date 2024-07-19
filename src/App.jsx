
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

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import Booking from './pages/Booking';
import CheckinBooking from './features/check-in-out/CheckinBooking';
import PrtotectedRoute from './ui/ProtectedRoute';
import ProtectedRoute from './ui/ProtectedRoute';
import SignupForm from './features/authentication/SignupForm';
import DarkModeProvider from './context/ModeContext';



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000
    }
  }
})

function App() {

  return (
    <>

      <DarkModeProvider >
        <QueryClientProvider client={queryClient} >
          <Toaster position='top-center' />
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <GlobalStyles />
            <Routes>
              <Route element={<ProtectedRoute> <AppLayout /></ProtectedRoute>} >
                <Route index element={<Dashboard />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="bookings/:id" element={<Booking />} />
                <Route path="checkin/:id" element={<CheckinBooking />} />
                <Route path="users" element={<NewUsers />} />
                <Route path="cabins" element={<Cabins />} />
                <Route path="account" element={<Account />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="login" element={<Login />} />
            </Routes>
          </BrowserRouter>

        </QueryClientProvider>
      </DarkModeProvider>




    </>

  )




}

export default App
