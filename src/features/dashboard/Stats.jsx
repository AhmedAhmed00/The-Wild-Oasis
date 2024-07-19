
import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi';
import Stat from './Stat';
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

export default function Stats({ bookings, confirmedStays }) {

  // 1. number of bookings
  const numBookings = bookings.length
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0)
  const checkins = confirmedStays.length

  return (
    <>
      <Stat title='Bookings' color='blue' icon={<HiOutlineBriefcase />} value={numBookings} />
      <Stat title='Sales' color='green' icon={<HiOutlineBanknotes />} value={formatCurrency(sales)} />
      <Stat title='Check-ins' color='indigo' icon={<HiOutlineCalendarDays />} value={checkins} />
      <Stat title='Occupancy' color='yellow' icon={<HiOutlineChartBar />} value={numBookings} />


    </>
  )
}
