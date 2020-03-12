import React from "react";
import axios from "axios";
import BookingCard from "./Dashboard-Components/bookingcard";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  state = {
    bookings: []
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "/api/all"
    })
      .then(response => {
        if (response.status === 200) {
          let arrayOfBookings = [];
          response.data.forEach((element, index) => {
            arrayOfBookings.push(element);
          });
          return this.setState({ bookings: arrayOfBookings });
        } else {
          const error = new Error(response.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="container">
        <Link to="/" className="btn btn-dark mb-2">
          Go Back
        </Link>
        <div className="row">
        {this.state.bookings.map((booking, index) => (
          <BookingCard key={index} {...booking}/>
        ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
