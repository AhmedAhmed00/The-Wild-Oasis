import styled from 'styled-components';
import useRecentBookings from './useRecentBookings';
import Spinner from '../../ui/Spinner';
import useRecentStays from './useRecentStays';
import Stats from './Stats';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from "../check-in-out/TodayActivity"



const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


function DashboardLayout() {

  const { bookings, numDays, isLoading: isLoadingBookings } = useRecentBookings()
  const { stays, confirmedStays, isLoading: isLoadingStay } = useRecentStays()

  if (isLoadingBookings || isLoadingStay) return <Spinner />





  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )


}

export default DashboardLayout;
