import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useForm } from "react-hook-form";


function Cabins() {

  const [displayForm, setDisplayForm] = useState(false)





  return (
    <>

      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row >
        <CabinTable />
        <Button onClick={() => setDisplayForm((show) => !show)} >Insert New Cabin</Button>

        {displayForm && <CreateCabinForm />}

      </Row>

    </>

  );
}

export default Cabins;
