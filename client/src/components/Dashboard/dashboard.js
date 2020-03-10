import React from "react";
import axios from "axios";
import BookingCard from "./Dashboard-Components/bookingcard"

class Dashboard extends React.Component {
  getBookings = () => {
     axios({
            method: "get",
            url: "/api/all"
          })
            .then(res => {
              if (res.status === 200) {
                console.log(res)
              } else {
                const error = new Error(res.error);
                throw error;
              }
            })
            .catch(err => {
              console.error(err);
            });
  };

  render() {
    const bookings = this.getBookings();

    /* const bookingList = bookings.map((booking, index) => (
      <BookingCard key={index} {...booking} />
    ));

    return <div>{bookingList}</div>; */
    return <p>Im a dashboard!</p>;
  }
}

export default Dashboard;
