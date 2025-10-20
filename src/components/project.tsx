interface ProjectProps{
  image: string,
  imageAlt: string,
  header: string,
  description: string,
  status: string,
}


export default function Project ({image, imageAlt, header,description,status}:ProjectProps){
  return (
    <div className="project-card">
      <img src={image} alt={imageAlt} />
      <h3>{header}</h3>
      <p className="project-desc">{description}</p>
      <p className="status">{status}</p>

    </div>
  )
}