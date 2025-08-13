import frontDev from "../assets/front-development.png";
import webDesign from "../assets/web-design.png";
import coding from "../assets/coding.png";

export default function Services() {
  return (
    <section id="service">
      <div className="service-container custom_container">
        <div className="service-title-deatils">
          <p className="title-heading">My</p>
          <h1 className="common-heading">Services</h1>
        </div>

        <div className="service-row custom_row">
          <div className="custom_col">
            <div className="service-img">
              <img src={frontDev} alt="UX/UI" />
            </div>
            <h2 className="service-sub-title">UX/UI Design</h2>
            <p className="service-detail">
              We provide expert UI/UX design services to produce digital experiences that are
              responsive, aesthetically pleasing, and easy to use.
            </p>
          </div>

          <div className="custom_col">
            <div className="service-img">
              <img src={webDesign} alt="Web Design" />
            </div>
            <h2 className="service-sub-title">Web Design</h2>
            <p className="service-detail">
              We offer cutting-edge, responsive web design services to produce aesthetically
              pleasing, intuitive, and effective websites.
            </p>
          </div>

          <div className="custom_col">
            <div className="service-img">
              <img src={coding} alt="Web Development" />
            </div>
            <h2 className="service-sub-title">Web Development</h2>
            <p className="service-detail">
              We create web applications, portfolios, e-commerce websites, and commercial websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
