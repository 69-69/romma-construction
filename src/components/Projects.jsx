import Image from 'next/image';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="wrapper">
      <div className="container py-14 py-md-16">
        <div className="text-center mb-10">
          <h3 className="fs-16 py-2 px-3 text-main d-inline rounded-pill oswald">
            Our Projects
          </h3>
          <h2 className="mb-3 mt-3 oswald">Construction Work Built on Practical Experience</h2>
          <p className="roboto mx-auto" style={{ maxWidth: '760px' }}>
            From structural and masonry work to electrical installations, carpentry, flooring, and finishing,
            Romma &amp; Co Construction brings hands-on skills to every stage of a project.
          </p>
        </div>

        <div className="row gx-lg-6 gy-6">
          {projects.map(({ id, title, description, image }) => (
            <div className="col-md-6 col-lg-4" key={id}>
              <div className="card h-100 shadow-sm">
                <figure className="card-img-top overflow-hidden mb-0">
                  <Image
                    src={image}
                    alt={`${title} | Romma & Co Construction`}
                    width={600}
                    height={420}
                    unoptimized
                    style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                  />
                </figure>
                <div className="card-body p-5">
                  <h3 className="fs-24 oswald mb-3">{title}</h3>
                  <p className="roboto mb-0">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
