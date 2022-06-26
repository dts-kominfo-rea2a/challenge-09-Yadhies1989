// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  return (
    <div className="card">
      <div>
        <img src={data.photo} alt={data.name} className="photo"></img>
      </div>
      <div className="isi">
        <section>
          <p>{data.name}</p>
          <p>{data.phone}</p>
          <p>{data.email}</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
