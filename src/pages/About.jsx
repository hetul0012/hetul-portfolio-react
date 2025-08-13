export default function About() {
  return (
    <section id="about">
      <div className="custom_container about-container">
        <div className="custom_row about_row">
          <div className="title-info custom_col">
            <p className="title-heading">Get To Know More</p>
            <h1 className="common-heading">About Me</h1>
            <p className="about-title-info">
              I am Hetul Suthar, a passionate Web Designer & Developer committed to
              crafting user-friendly, visually appealing, and responsive websites.
              My approach focuses on seamless user experiences (UX) and aesthetically
              pleasing user interfaces (UI) that drive engagement and functionality.
            </p>
          </div>

          <div className="about_col">
            <div className="expe tilt">
              <i className="fa-solid fa-award"></i>
              <h4 className="about-sub-heading">Experience</h4>
              <p>Arham Technosoft (India)</p>
              <p>Web Designer internship</p>
            </div>

            <div className="edu">
              <i className="fa-solid fa-graduation-cap"></i>
              <h4 className="about-sub-heading">Education</h4>
              <p>Ksv University (India)</p>
              <p>Bachelor of Computer Applications</p>
              <p>Humber College (Canada)</p>
              <p>Web Development</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
