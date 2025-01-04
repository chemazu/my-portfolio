// import Footer from "../../components/footer/footer";
import { FaWhatsapp, FaEnvelope, FaTwitter } from 'react-icons/fa';
import "./style.scss";

export default function Contact() {
  return (
    <div>
      <section className="contact-header"></section>
      <section className="contact-body">
        <div>
          <h2>Contact our team</h2>
          {/* <h3>
            Helping businesses innovate and stay highly relevant to their
            customers by building cutting-edge digital solutions.
          </h3> */}
          <p className="sub-heading">
            Got any questions about creating product or scaling your platform?
            We are always here to help. Reach out anytime, 24/7, and get onboard
            in less than 5 minutes
          </p>
        </div>

        <div className="contact-body-content">
          <div className="form-wrapper">
            <form>
              <div className="form-input-wrapper">
                <div className="form-input">
                  <p>First name</p>
                  <input placeholder="First name" />
                </div>
                <div className="form-input">
                  <p>Last name</p>
                  <input placeholder="Last name" />
                </div>
              </div>
              <div className="form-input">
                <p>Email</p>
                <input placeholder="Email" />
              </div>
              <div className="form-input">
                <p>Phone number</p>
                <input placeholder="Phone number" />
              </div>

              <div className="form-input">
                <p>Message</p>
                <textarea placeholder="Message" rows={5} />
              </div>
              <div className="button-wrapper">
                <button>Send Message</button>
              </div>
            </form>
          </div>
          <div className="info-wrapper">
            <h3>Chat with us</h3>
            <p className="speak">Speak to our friendly team via chat</p>
            <p>
        <a href="https://wa.me/2348171481096" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp style={{ marginRight: '8px' }} /> Start a Chat
        </a>
      </p>
      <p>
        <a href="mailto:chemazuchukwuemeka333@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope style={{ marginRight: '8px' }} /> Shoot us an Email
        </a>
      </p>
      <p>
        <a href="https://twitter.com/cchemazu" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={{ marginRight: '8px' }} /> Message us on X
        </a>
      </p>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
