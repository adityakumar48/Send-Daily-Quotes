import { useState } from "react";
import axios from "axios";
import BackgroundVideo from "../assests/BackgroundVideo.mp4";

const initalState = {
  email: "",
};
const Home = () => {
  const [state, setState] = useState(initalState);
  const { email } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email");
    } else {
      axios
        .post("http://localhost:8000/data/email/add", {
          email,
        })
        .then(() => {
          setState({ email: "" });
        })
        .catch((err) => console.log(err.response.data));
    }

    alert("Email added successfully");
    setState({ email: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <header>
      <div className="main">
        <video src={BackgroundVideo} autoplay="true" muted="true" loop="true" />
      </div>
      <div className="content">
        <div className="container">
          <div className="col-md-12"></div>
          <div className="row">
            <p className="Txt">
              OUR AIM IS MOTIVATE TO LEARN PROGRAMMING OR CODING
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                className="email"
                name="email"
                placeholder="Your Email ....."
                value={email}
                onChange={handleInputChange}
              />

              <input
                className="btn btn-success"
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
