export default function Contact() {
    return (
      <section id="contact">
        <div className="contact-container custom_container">
          <div className="contact-title-deatils">
            <p className="title-heading">Get in touch</p>
            <h1 className="common-heading">Contact Me</h1>
          </div>
  
          <div className="contact-row custom_row">
            <div className="contact-col">
              <div className="box">
                <img src="/src/assets/gmail.png" alt="email-icon" />
                <h4 className="contact-detail-title">Email</h4>
                <span>hetulss3@gmail.com</span>
                <p>Write Me</p>
              </div>
  
              <div className="box">
                <img src="/src/assets/linkedin.png" alt="linkedin-icon" />
                <h4 className="contact-detail-title">Linkedin</h4>
                <span>Hetul Suthar</span>
                <p>Write Me</p>
              </div>
  
              <div className="box">
                <img src="/src/assets/github.png" alt="github-icon" />
                <h4 className="contact-detail-title">Github</h4>
                <span>hetul0012</span>
                <p>Write Me</p>
              </div>
            </div>
          </div>
  
          <div className="form-row custom_row">
            <form action="/" className="contact-form">
              <div className="form-detail">
                <input type="text" id="fname" name="fname" required placeholder="Insert your name" className="firstname" />
              </div>
              <div className="form-detail">
                <input type="text" id="lname" name="lname" required placeholder="Insert your email" className="lastname" />
              </div>
              <div className="form-detail">
                <textarea placeholder="Message" className="text-area" cols="30" rows="10"></textarea>
              </div>
              <button className="contact-button">
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  