import React, { useState } from "react";

const Contact = () => {
  const img4 =
    "https://www.argentcu.org/wp-content/uploads/2016/05/Woman-shopping-online.jpg";
  const [data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [check, setCheck] = useState(false);

  const inputEvent = (event) => {
    const { value, name } = event.target;
    console.log(value, name);

    setData((preValue) => {
      return { ...preValue, [name]: value }; //didn;t get it
    });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { fname, lname, phone, email, address, message } = data;
    if (check) {
      const res = await fetch(
        "https://online-pay-contact-default-rtdb.firebaseio.com/onlinepaycontact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application.json",
          },
          body: JSON.stringify({
            fname,
            lname,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setData({
          fname: "",
          lname: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("data stored successfully");
      }
    } else {
      alert("please check the agreement box");
    }
  };
  return (
    <>
      <div className="contact">
        <div className="contact-img">
          <h4>Connect with our sales team</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, rem?
          </p>
          <img src={img4} alt="img4" />
        </div>
        <form className="contact-form" method="POST">
          <div class="row g-3 mb-3">
            <div class="col">
              <input
                type="text"
                value={data.fname}
                name="fname"
                class="form-control"
                placeholder="First name"
                aria-label="First name"
                onChange={inputEvent}
              />
            </div>
            <div class="col">
              <input
                type="text"
                value={data.lname}
                name="lname"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
                onChange={inputEvent}
              />
            </div>
          </div>
          <div class="row g-3 mb-3">
            <div class="col">
              <input
                type="number"
                value={data.phone}
                name="phone"
                class="form-control"
                placeholder="Phone Number"
                onChange={inputEvent}
              />
            </div>
            <div class="col">
              <input
                type="email"
                value={data.email}
                name="email"
                class="form-control"
                placeholder="Your Email"
                onChange={inputEvent}
              />
            </div>
          </div>
          <div class="mb-3">
            <input
              type="text"
              value={data.address}
              name="address"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Add a address"
              onChange={inputEvent}
            />
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              value={data.message}
              name="message"
              id="exampleFormControlTextarea1"
              placeholder="Enter Your Message"
              rows="3"
              onChange={inputEvent}
            />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck"
                onClick={() => setCheck(true)}
              />
              <label class="form-check-label" for="gridCheck">
                I agree that ZoroPay may contact me anytime for inquiry and
                confirmation of details as given above.
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary w-100 "
              onClick={PostData}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
