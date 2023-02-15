import React, { useState } from "react";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Alert from "./Alert";

const MailchimpForm = ({ gift = 'Free Guide' }) => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addToMailchimp(email);

    setResult(res?.result);
    setMessage(res?.msg);
  }

  const successMessage = `Woo! Check your email inbox: Your ${gift} is on its way!`;
  
  if (result === "success") return (
    <div id='signup-form'>
      <Alert message={successMessage} closeButton={false}/>
    </div>
  )

  return (
    <form id="signup-form" onSubmit={handleSubmit}>
      <div><em>Register And Get Instant Access</em></div>
      {
        result && <Alert type={result} message={message} />
      }
      <div className="form-group">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="button button-info button-medium hover-grow">Subscribe</button>
    </form>
  )
}

export default MailchimpForm;
