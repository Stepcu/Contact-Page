import React from "react";
import ContactForm from "../components/ContactForm";

// ContactPage Component: Renders a contact form centered on the page
const ContactPage = () => {
  return (
    <div
      style={{
        display: "flex", // Use flexbox for alignment
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh", // Full viewport height for vertical centering
      }}
    >
      {/* ContactForm Component */}
      <ContactForm />
    </div>
  );
};

export default ContactPage;
