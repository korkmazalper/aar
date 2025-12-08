import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h1>Contact Us</h1>
            <p className="subtitle">
              Get in touch with us for more information about our programs, 
              membership, or how you can support academics at risk.
            </p>

            <div className="info-section">
              <h3>Email</h3>
              <p>info@academicsatrisk.org</p>
              <p>academicsatrisk@protonmail.com</p>
            </div>

            <div className="info-section">
              <h3>Address</h3>
              <p>Rösrather straße 265, 51107 Köln / Deutschland</p>
            </div>

            <div className="info-section">
              <h3>Bank Account</h3>
              <p>VR Bank RheinAhrEifel eG</p>
              <p>IBAN: DE24 5776 1591 1757 2312 00</p>
              <p className="small-text">(Annual membership fee is minimum 30 Euros)</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
