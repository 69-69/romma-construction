import NextLink from './NextLink';

const Hero = () => {
  return (
    <section id="home">
      <div
        className="swiper-container hero"
        style={{
          backgroundImage: `url(/img/hero-bg.webp)`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          height: '90vh',
        }}
      >
        <div className="overlay"></div>

        <div className="container h-100 d-flex justify-content-center align-items-center position-relative z-2">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="text-center">
              <p className="fs-18 text-white text-uppercase mb-3 animate__animated animate__zoomIn animate__delay-1s oswald">
                Romma &amp; Co Construction
              </p>

              <h1 className="fs-56 ls-xl text-white mb-3 animate__animated animate__zoomIn animate__delay-1s oswald">
                Building With Skill, Strength &amp; Care
              </h1>

              <p className="fs-26 text-white mb-5 animate__animated animate__zoomIn animate__delay-2s roboto">
                Reliable construction, installation, and finishing services for residential and general construction projects.
              </p>

              <div className="d-inline link animate__animated animate__slideInUp animate__delay-3s position-relative z-2">
                <NextLink
                  title="Explore Our Work"
                  href="#about"
                  className="btn btn-sm primary-bg text-white rounded d-inline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
