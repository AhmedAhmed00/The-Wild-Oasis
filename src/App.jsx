
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
      <QueryClientProvider client={queryClient} >
        <Toaster position='top-center' />
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route element={<AppLayout />} >
              <Route index element={<Dashboard />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:id" element={<Booking />} />
              <Route path="checkin/:id" element={<CheckinBooking />} />
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

      </QueryClientProvider>




    </>

  )




}

export default App
