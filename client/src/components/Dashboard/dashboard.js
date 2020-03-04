import React from "react";
import axios from "axios";
import Booking-Card from "../Dashboard-Components/booking-card"

class Dashboard extends React.Component {
  getBookings = () => {
    axios
      .get("https://localhost:3001/api/all", {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        return response;
      });
  };

  render() {
    const bookings = this.getBookings();

    const bookingList = bookings.map((booking, index) => (
      <Booking-Card key={index} {...booking} />
    ));

    return <div>{bookingList}</div>;
  }
}

export default Dashboard;
