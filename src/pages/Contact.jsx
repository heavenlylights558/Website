import { useState } from "react";
import Button from "../components/Button";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // No backend yet — this simply confirms the form works on the frontend.
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="contact-page">
      <div className="container page-hero">
        <span className="eyebrow-plain">Get in Touch</span>
        <h1>Contact Us</h1>
        <p>
          Questions about an order, a fragrance, or a bulk gifting request?
          Send us a message and we'll get back to you.
        </p>
      </div>

      <div className="container contact-grid">
        <div className="contact-info">
          <div className="contact-info__item">
            <h3>Email</h3>
            <p>heavenlylights558@gmail.com</p>
          </div>
          <div className="contact-info__item">
            <h3>Phone</h3>
            <p>+91 79028 79115</p>
          </div>
          <div className="contact-info__item">
            <h3>Location</h3>
            <p>Kerala, India</p>
          </div>
          <div className="contact-info__item">
            <h3>Follow Us</h3>
            <ul className="contact-info__social">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <div className="contact-form__success" role="status">
              Thanks for reaching out — your message has been noted. We'll
              get back to you soon.
            </div>
          )}

          <div className="contact-form__row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__row">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__row">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
