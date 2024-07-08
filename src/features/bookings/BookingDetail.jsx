import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMoveBack } from '../../hooks/useMoveBack';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonText from './../../ui/ButtonText';
// import BookingDataBox from './BookingDataBox';
import ButtonGroup from './../../ui/ButtonGroup';
import Button from '../../ui/Button';
import useBooking from './useBooking';
import Spinner from '../../ui/Spinner';
import { Error } from '../../ui/FormRow';
import { bookings } from '../../data/data-bookings';
import BookingDataBox from './BookingDataBox';


const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {


  const { data: bookingDetails, isLoading, isError } = useBooking()





  const moveBack = useMoveBack();
  const navigate = useNavigate();



  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };



  if (isLoading) return <Spinner />
  if (isError) return <Error >
    cannot get booking Details
  </Error>

  const { id, status } = bookingDetails





  return (
    < >
      <Row type='horizontal'>
        <HeadingGroup>
          <Heading type='h1'>Booking #{id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={bookingDetails} />

      {/* <ButtonGroup>
        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

        {status === 'checked-in' && (
          <Button onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
            Check out
          </Button>
        )}

        <Modal>
          <Modal.Toggle opens='delete'>
            <Button variation='danger'>Delete booking</Button>
          </Modal.Toggle>
          <Modal.Window name='delete'>
            <ConfirmDelete
              resource='booking'
              // These options will be passed wherever the function gets called, and they determine what happens next
              onConfirm={(options) => deleteBooking(bookingId, options)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>

        <Button variation='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup> */}
    </>
  );
}

export default BookingDetail;
