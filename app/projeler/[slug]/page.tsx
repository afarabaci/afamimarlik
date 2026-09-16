import Image from "next/image";
import {notFound} from "next/navigation";
import {getProject,projects} from "../../data/projects";

export function generateStaticParams(){
  return projects.map(project=>({slug:project.slug}));
}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const project=getProject(slug);

  if(!project) notFound();

  return(
    <section className="project-detail">
      <div className="project-detail-header">
        <div>
          <span className="project-detail-category">{project.category}</span>
          <h1>{project.title}</h1>
        </div>

        <div className="project-detail-meta">
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-gallery">
        {project.images.map((image,index)=>(
          <div className="project-gallery-item" key={image}>
            <Image
              src={image}
              alt={`${project.title} ${index+1}`}
              fill
              className="project-gallery-image"
              sizes="(max-width: 720px) 90vw, 45vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}