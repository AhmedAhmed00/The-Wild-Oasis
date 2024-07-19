
import { useDarkMode } from '../../context/ModeContext';
import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns';
import Heading from './../../ui/Heading';
import styled from 'styled-components';
import DashboardBox from './DashboardBox';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;
  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({ bookings, numDays }) {
  // In the chart we need to set colors, but we can't do it based on CSS variables, because we have no access to them here. So let's set them manually
  const { isDark } = useDarkMode();

  // console.log(bookings);
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });
  // console.log(allDates);


  const data = allDates.map((date) => {
    return {
      label: format(date, 'MMM dd'),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    };
  });
  // console.log(data);

  const colors = isDark
    ? {
      totalSales: { stroke: '#4f46e5', fill: '#4f46e5' },
      extrasSales: { stroke: '#22c55e', fill: '#22c55e' },
      text: '#e5e7eb',
      background: '#18212f',
    }
    : {
      totalSales: { stroke: '#4f46e5', fill: '#c7d2fe' },
      extrasSales: { stroke: '#16a34a', fill: '#dcfce7' },
      text: '#374151',
      background: '#fff',
    };

  return (
    <StyledSalesChart>
      <Heading as="h2" >
        Sales From {format(allDates[0], "MMM dd")} to {format(allDates[allDates.length - 1], "MMM dd")}
      </Heading>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={data}  >
          <XAxis dataKey='label' />
          <YAxis unit='$' />
          <CartesianGrid strokeDasharray='4' />

          <Tooltip />
          <Area
            type='monotone'
            dataKey='totalSales'
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            unit='$'
            name='Total sales'
          />
          <Area
            type='monotone'
            dataKey='extrasSales'
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            unit='$'
            name='Extras sales'
          />
        </AreaChart>
      </ResponsiveContainer>


    </StyledSalesChart>
  );
}

export default SalesChart;
