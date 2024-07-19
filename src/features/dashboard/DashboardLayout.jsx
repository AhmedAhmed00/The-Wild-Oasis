import styled from 'styled-components';
import useRecentBookings from './useRecentBookings';
import Spinner from '../../ui/Spinner';
import useRecentStays from './useRecentStays';
import Stats from './Stats';



const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


function DashboardLayout() {

  const { bookings, isLoading: isLoadingBookings } = useRecentBookings()
  const { stays, confirmedStays, isLoading: isLoadingStay } = useRecentStays()

  if (isLoadingBookings || isLoadingStay) return <Spinner />
  console.log(bookings);





  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} />
      <div>today's activity</div>
      <div>chart stay duration</div>
      <div>chart of sales</div>
    </StyledDashboardLayout>
  )


}

export default DashboardLayout;
