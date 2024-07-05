import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import useDeleteCabin from './useDeleteCabin';
import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import useCreateCabin from './useCreateCabin';



const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const CabinName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;



const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {

  const [showForm, setShowForm] = useState(false)

  const { name, id, maxCapacity, discount, regularPrice, image, createdAt, description } = cabin


  const { addNewCabin, deletingStatus, isErrorDeleting } = useCreateCabin()




  const { data, isError: isErroeDealtin, mutate } = useDeleteCabin()

  function handleDuplicateCabin() {
    addNewCabin({
      name: `copy of ${name}`
      , maxCapacity,
      discount,
      regularPrice,
      image,
      description
    })

  }



  return (

    <>


      <TableRow role='row'>
        <Img src={image} alt={description} />
        <CabinName>
          {name}
        </CabinName>
        <p>Fits Up to {maxCapacity} guests</p>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>

        <div>
          <button onClick={() => setShowForm(show => !show)} >Update</button>
          <button onClick={handleDuplicateCabin}>Duplicate</button>
          <button onClick={() => mutate(id)}>delete</button>
        </div>
      </TableRow >
      {
        showForm && <CreateCabinForm editedCabinData={cabin} />
      }
    </>



  );
}

export default CabinRow;
