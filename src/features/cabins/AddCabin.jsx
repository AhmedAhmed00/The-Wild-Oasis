import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';
import { useState } from 'react';

// function AddCabin() {
//   const [showModal, setShowModal] = useState(false)

//   function handleCloseModal() {
//     setShowModal(show => !show)
//   }
//   return (
//     <>
//       <Button onClick={() => setShowModal((show) => !show)} >Insert New Cabin</Button>
//       {showModal && <Modal handleCloseModal={handleCloseModal} >
//         <CreateCabinForm handleCloseModal={handleCloseModal} />
//       </Modal>}
//     </>

//   );
// }


function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}


export default AddCabin;
