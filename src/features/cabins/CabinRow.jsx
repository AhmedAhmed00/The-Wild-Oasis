import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import useDeleteCabin from './useDeleteCabin';
import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import useCreateCabin from './useCreateCabin';
import Modal from '../../ui/Modal';
import ConfirmDelete from './../../ui/ConfirmDelete';
import Table from '../../ui/Table';





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


  const { name, id, maxCapacity, discount, regularPrice, image, createdAt, description } = cabin


  const { addNewCabin, deletingStatus, isErrorDeleting } = useCreateCabin()




  const { data, isError: isErroeDealtin, mutate: deleteCabin } = useDeleteCabin()

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


      <Table.Row >
        <Img src={image} alt={description} />
        <CabinName>
          {name}
        </CabinName>
        <p>Fits Up to {maxCapacity} guests</p>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <div>
          <Modal>
            <Modal.Open opens={'edit'}>
              <button  >Update</button>
            </Modal.Open>
            <Modal.Window name={'edit'}>
              <CreateCabinForm editedCabinData={cabin} />
            </Modal.Window>
          </Modal>


          <Modal>
            <Modal.Open opens={'delete'}>
              <button  >Update</button>
            </Modal.Open>
            <Modal.Window name={'delete'}>
              <ConfirmDelete resource={'cabins'}
                onConfirm={() => deleteCabin(id)}
              />
            </Modal.Window>

          </Modal>


          <button onClick={handleDuplicateCabin}>Duplicate</button>


        </div>
      </Table.Row >

    </>



  );
}

export default CabinRow;
