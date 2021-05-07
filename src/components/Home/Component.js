import { React, useEffect, useState } from "react";
import "./Component.css";

const Home = () => {
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [update, setUpdate] = useState(true);
  // Fetch the user info
  const getUser = async () => {
    const req = await fetch("https://randomuser.me/api/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    return req.results[0];
  };
  // Applie the user data
  const addData = async () => {
    const data = await getUser();
    const image = await data.picture.large;
    const firstName = await data.name.first;
    const lastName = await data.name.last;
    const gender = await data.name.title;
    const email = await data.email;
    const phone = await data.phone;
    const city = await data.location.city;

    setImage(image);
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setPhone(phone);
    setGender(gender);
    setCity(city);
  };

  useEffect(() => {
    addData();
  }, [update]);
  return (
    <div className="columns is-vcentered is-centered mt-6">
      <div className="column is-4 is-vcentered">
        <div className="box userBox columns">
          <div className="column">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128 ">
                  <img src={image} alt="profile" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>
                      Name: {gender}.{firstName} {lastName}
                      <br />
                    </strong>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>City: {city}</p>
                  </p>
                  <button className="button is-dark" onClick={() => addData()}>
                    Generate new user
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
