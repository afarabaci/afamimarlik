import Image from "next/image";
import Link from "next/link";
import {projects} from "../data/projects";

export default function Projeler(){
  return(
    <section className="page-section projects-page">
      <div className="page-heading">
        <h1>Projeler</h1>
      </div>

      <div className="projects-grid">
        {projects.map(project=>(
          <Link href={`/projeler/${project.slug}`} className="project-card" key={project.slug}>
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="project-card-image"
              sizes="(max-width: 720px) 90vw, 440px"
            />

            <div className="project-card-overlay"/>

            <div className="project-card-info">
              <span>{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.location} · {project.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}