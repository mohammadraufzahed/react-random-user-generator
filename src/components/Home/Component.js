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
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="grid grid-rows-12 border-2 border-black bg-gray-300 backdrop-blur">
          <div className="grid grid-rows-12 p-5">
            <img
              src={image}
              alt="profile"
              className="mx-auto rounded border-2 border-black mb-4"
            />
            <p className="mx-auto mb-3 grid grid-rows-12 text-left border-2 border-black">
              <div className="px-2 py-1 mb-1">
                <strong>Name: </strong>
                <span>
                  {gender}.{firstName} {lastName}
                </span>
              </div>
              <div className="px-2 mb-1">
                <strong>Email: </strong>
                <span>{email}</span>
              </div>
              <div className="px-2 mb-1">
                <strong>Phone: </strong>
                <span>{phone}</span>
              </div>
              <div className="px-2 mb-1">
                <strong>City: </strong>
                <span>{city}</span>
              </div>
            </p>
            <button
              className="button-narrow bg-white hover:bg-black hover:text-white transition-all p-2 mx-auto"
              onClick={() => addData()}
            >
              Generate new user
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
