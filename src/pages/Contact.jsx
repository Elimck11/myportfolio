import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';
    setFormErrors(errors);

    // If no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Send form data to the server or email (optional)
      alert('Form submitted successfully!');
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form id = 'contact' submit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        {formErrors.name && <p>{formErrors.name}</p>}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        {formErrors.email && <p>{formErrors.email}</p>}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        />
        {formErrors.message && <p>{formErrors.message}</p>}
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
