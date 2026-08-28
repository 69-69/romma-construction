import Image from 'next/image';
import { whyChoose } from '../data';

const WhyChoose = () => {
  return (
    <div className="row gx-lg-8 align-items-center">
      <div className="order-lg-2 col-lg-6">
        <figure className="img-bg">
          <Image
            src="/img/transforming-residential-construction-in-gambias.webp"
            alt="Romma & Co Construction craftsmanship"
            width={600}
            height={700}
            unoptimized={true}
            className="position-static"
          />
        </figure>
      </div>

      <div className="order-lg-1 col-lg-6">
        <h3 className="fs-16 py-2 px-3 text-main d-inline rounded-pill oswald">
          Why Choose Us?
        </h3>

        <h2 className="mb-5 mt-3 justify-content-start oswald">
          Practical Skills.
          <span className="ms-2">Dependable Results.</span>
        </h2>

        <div>
          <ul className="icon-list bullet-bg mb-0">
            {whyChoose.map(({ id, title, description }) => (
              <li key={id}>
                <div className="d-flex align-items-center">
                  <i className="uil uil-check primary-bg text-white p-1" />
                  <h3 className="ms-2 fw-bold fs-20 oswald">{title}</h3>
                </div>
                <p className="text-justify roboto">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
