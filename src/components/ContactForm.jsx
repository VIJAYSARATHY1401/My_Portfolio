import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-hero pt-5 text-white">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="mt-5">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/message+one+comment+one+message+request+icon-1320184041562889001.png"
                width="240"
                alt=""
              />

              <h1 className="">Want to Contact Me?</h1>
              <p className="leading">Send me a message</p>
            </div>
          </div>
          <div className="col-sm-8 text-dark">
            <div className="card">
              <div className="card-body">
                <form>
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
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="form-control"
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
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      className="form-control"
                      placeholder="Share your message with us"
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
  );
};

export default ContactForm;
