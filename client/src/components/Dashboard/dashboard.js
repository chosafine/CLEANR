import React from "react";
import axios from "axios";
import BookingCard from "./Dashboard-Components/bookingcard"

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
    /* const bookings = this.getBookings();

    const bookingList = bookings.map((booking, index) => (
      <BookingCard key={index} {...booking} />
    ));

    return <div>{bookingList}</div>; */
    return <p>Im a dashboard!</p>;
  }
}

export default Dashboard;
