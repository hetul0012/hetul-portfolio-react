export default function ProjectCard({ title, image, url }) {
  return (
    <div className="custom_col">
      <div className="project-img">
        <img src={image} alt={title} />
      </div>
      <h2 className="project-sub-title">{title}</h2>
      <div className="btn-container">
        <a href={url} target="_blank" rel="noreferrer" className="common-button">
          Live Demo
        </a>
      </div>
    </div>
  );
}
