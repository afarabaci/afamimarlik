import Image from "next/image";
import Link from "next/link";
import {projects} from "../data/projects";
import { getLocale, getMessages } from "../i18n/server";

export async function generateMetadata() {
  const t = await getMessages();
  return { title: t.nav.projects };
}

export default async function Projeler(){
  const t = await getMessages();
  const locale = await getLocale();
  return(
    <section className="page-section projects-page">
      <div className="page-heading">
        <h1>{t.nav.projects}</h1>
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
              <span>{project.category[locale]}</span>
              <h2>{project.title}</h2>
              <p>{project.location} · {project.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
