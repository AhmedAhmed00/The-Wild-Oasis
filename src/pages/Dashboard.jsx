import DashboardLayout from "../features/dashboard/DashboardLayout";
import useRecentBookings from "../features/dashboard/useRecentBookings";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardFilter from './../features/dashboard/DashboardFilter';
import Spinner from './../ui/Spinner';

function Dashboard() {

  return (
    <>


      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
