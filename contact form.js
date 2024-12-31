import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col } from "reactstrap";

// ContactForm Component: A responsive and styled contact form
const ContactForm = () => {
  // State for form input fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for status message feedback
  const [statusMessage, setStatusMessage] = useState("");

  // Handle input changes and update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission and send email using emailjs
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "", // Replace with your EmailJS Service ID
        "", // Replace with your EmailJS Template ID
        formData,
        "" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          // Display success message and reset form
          setStatusMessage("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          // Display error message
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        padding: "20px",
      }}
    >
      <Row className="justify-content-center w-100">
        <Col
          md={6}
          lg={5} // Narrower column for large screens
          style={{
            marginLeft: "50px",
          }}
        >
          <div
            style={{
              padding: "30px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#0f0029", // Dark background
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "30px",
                fontWeight: "bold",
                color: "#fff", // White text
              }}
            >
              Contact Me
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    backgroundColor: "#f9f9f9", // Light background
                    color: "#333",
                  }}
                  required
                />
              </div>

              {/* Email Input */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    backgroundColor: "#f9f9f9",
                    color: "#333",
                  }}
                  required
                />
              </div>

              {/* Message Input */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    backgroundColor: "#f9f9f9",
                    color: "#333",
                  }}
                  rows="5"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#FFB02E",
                    color: "#0f0029",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#928ea9";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#FFB02E";
                    e.target.style.color = "#0f0029";
                  }}
                >
                  Send
                </button>
              </div>
            </form>

            {/* Status Message */}
            {statusMessage && (
              <p
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  color: statusMessage.includes("successfully")
                    ? "green" // Success message in green
                    : "red", // Error message in red
                }}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
