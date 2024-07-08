import React from 'react'
import BookingDetail from '../features/bookings/BookingDetail'

export default function Booking() {
    // the page should not fetch data and not have any other side effect (cleaner development)
    return (
        <BookingDetail />
    )
}
