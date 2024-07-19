import { isFuture, isPast, isToday } from 'date-fns';
import { useState } from 'react';
import { guests } from './data-guests';
import { cabins } from './data-cabins';
import { bookings } from './data-bookings';
import Button from './../ui/Button';
import supabase from './../services/supabase';
import { subtractDates } from './../utils/helpers';


// const originalSettings = {
//   minBookingLength: 3,
//   maxBookingLength: 30,
//   maxGuestsPerBooking: 10,
//   breakfastPrice: 15,
// };




async function deleteGuests() {
  const { error } = await supabase.from('guests').delete().gt('user_id', 0);
  if (error) console.log(error.message);
}

async function deleteCabins() {
  const { error } = await supabase.from('cabins').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function deleteBookings() {
  const { error } = await supabase.from('Bookings').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function createGuests() {
  const { error } = await supabase.from('guests').insert(guests);
  if (error) console.log(error.message);
}

async function createCabins() {
  const { error } = await supabase.from('cabins').insert(cabins);
  if (error) console.log(error.message);
}


















async function createBookings() {


  const { data: guestsIds } = await supabase
    .from('guests')
    .select('user_id')
    .order('user_id');

  const allGuestIds = guestsIds.map((cabin) => cabin.user_id);
  console.log('all geuests ids', allGuestIds);



  const { data: cabinsIds } = await supabase
    .from('cabins')
    .select('id')
    .order('id');









  const allCabinIds = cabinsIds.map((cabin) => cabin.id);




  const finalBookings = bookings.map((booking) => {
    const cabin = cabins.at(booking.cabinID - 1);
    const numNights = subtractDates(booking.endDate, booking.startDate);
    const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);
    const extrasPrice = booking.hasBreakfast
      ? numNights * 15 * booking.numOfGusets
      : 0;
    const totalPrice = cabinPrice + extrasPrice;


    let status;
    if (
      isPast(new Date(booking.endDate)) &&
      !isToday(new Date(booking.endDate))
    )
      status = 'checked-out';
    if (
      isFuture(new Date(booking.startDate)) ||
      isToday(new Date(booking.startDate))
    )
      status = 'unconfirmed';
    if (
      (isFuture(new Date(booking.endDate)) ||
        isToday(new Date(booking.endDate))) &&
      isPast(new Date(booking.startDate)) &&
      !isToday(new Date(booking.startDate))
    )
      status = 'checked-in';







    return {
      ...booking,
      numNights,
      cabinPrice,
      extrasPrice,
      totalPrice,
      guestId: allGuestIds.at(booking.user_id - 1),
      cabinID: allCabinIds.at(booking.cabinID - 1),
      status,
    };



  });




  const { error } = await supabase.from('Bookings').insert(finalBookings);
  if (error) console.log(error.message);




}






export function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {



    setIsLoading(true);
    // Bookings need to be deleted FIRST
    await deleteBookings();
    await deleteGuests();
    await deleteCabins();

    // // Bookings need to be created LAST
    await createGuests();
    await createCabins();

    await createBookings();

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: 'auto',
        backgroundColor: '#e0e7ff',
        padding: '8px',
        borderRadius: '5px',
        textAlign: 'center',
      }}
    >
      <h3>DEV AREA</h3>

      <Button
        onClick={uploadAll}
        disabled={isLoading}
      >
        Upload ALL sample data
      </Button>
      <p>Only run this only once!</p>
      <p>
        <em>(Cabin images need to be uploaded manually)</em>
      </p>
      <hr />
      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload CURRENT bookings
      </Button>
      <p>You can run this every day you develop the app</p>
    </div>
  );
}
