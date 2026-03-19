import React from 'react'

export default function Contact() {
  return (
    <div className="container">
      <h1>Contact Me</h1>

      <form className="form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button className="btn">Send</button>
      </form>
    </div>
  );
}
