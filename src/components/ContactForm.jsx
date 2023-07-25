import React, { useState } from "react";
import { Element } from "react-scroll";
import emailjs from "emailjs-com";
emailjs.init("pnqJb6BydtzwZCn4h");

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (phone.length !== 10) {
      alert("Phone number should be of 10 digits.");
      return;
    }

    // Validate name length
    if (name.length > 50) {
      alert("Name should not exceed 50 characters.");
      return;
    }

    // Proceed with form submission if all validations pass
    // You can handle form submission logic here
    setLoading(true); // Show loading state
    try {
      // Proceed with form submission if all validations pass
      // You can handle form submission logic here
      console.log("Form submitted!");
      await sendmail();
      alert("Email sent successfully!");
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false); // Hide loading state after the email is sent or an error occurs
    }
  };

  function sendmail() {
    emailjs.send("service_q0jqdf3", "template_k21xotf", {
      // Replace "smtp_server" and "template_id" with your actual values
      to_email: "vijayinnovation14@gmail.com",
      phone: document.getElementById("phone").value,
      from_name: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      msg: document.getElementById("msg").value,
    });
  }
  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMsg("");
    setFormSubmitted(false); // Set formSubmitted state to false to show the original form again
  };
  return (
    <Element name="Contact">
      <section className="bg-hero text-white">
        <div className="container p-4">
          <div className="row">
            <div className="col-sm-4">
              <div className="">
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/message+one+comment+one+message+request+icon-1320184041562889001.png"
                  width="240"
                  alt=""
                />

                <h1
                  className=""
                  style={{ fontSize: "32px", letterSpacing: "1px" }}
                >
                  Want to Contact Me?
                </h1>
                <p className="lead">
                  Send me a message.. I will reach you soon
                </p>
              </div>
            </div>
            <div className="col-sm-8 text-dark">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleFormSubmit} action="post">
                    <div className="mb-3">
                      <label htmlFor="fullname" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Enter your full name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        name="message"
                        rows="4"
                        id="msg"
                        className="form-control"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        required
                        placeholder="Share your message"
                      ></textarea>
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary">
                        <i className="fa fa-external-link"></i> Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ContactForm;
