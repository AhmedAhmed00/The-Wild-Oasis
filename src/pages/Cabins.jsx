import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useForm } from "react-hook-form";
import AddCabin from './../features/cabins/AddCabin';
import CabinTable from './../features/cabins/CabinTable';


function Cabins() {



  return (
    <>

      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row >
        <CabinTable />
        <AddCabin />

      </Row>

    </>

  );
}

export default Cabins;
