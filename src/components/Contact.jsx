import NextLink from './NextLink';

const Contact = () => {
  return (
    <section id="contact" className="wrapper whychoose-bg">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-10 align-items-center">
          <div className="col-lg-6">
            <h3 className="fs-16 py-2 px-3 text-main d-inline rounded-pill oswald">
              Contact Us
            </h3>
            <h2 className="mb-4 mt-3 oswald">Let&apos;s Discuss Your Next Construction Project</h2>
            <p className="roboto mb-4">
              Whether you need construction support, electrical installation, carpentry, masonry,
              flooring, fitting, or general maintenance work, we are ready to discuss your requirements.
            </p>
            <p className="roboto mb-0">
              Share your project scope, location, and preferred timeline so we can understand how
              Romma &amp; Co Construction can support you.
            </p>
          </div>

          <div className="col-lg-6 mt-8 mt-lg-0">
            <div className="card shadow-sm">
              <div className="card-body p-6">
                <h3 className="oswald mb-4">Request a Project Discussion</h3>
                <form>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="contactName" type="text" placeholder="Your Name" />
                    <label htmlFor="contactName">Your Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="contactEmail" type="email" placeholder="Email Address" />
                    <label htmlFor="contactEmail">Email Address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="contactProject" type="text" placeholder="Project Type" />
                    <label htmlFor="contactProject">Project Type</label>
                  </div>
                  <div className="form-floating mb-4">
                    <textarea className="form-control" id="contactMessage" placeholder="Tell us about your project" style={{ height: '140px' }} />
                    <label htmlFor="contactMessage">Tell Us About Your Project</label>
                  </div>
                  <NextLink
                    title="Send Project Inquiry"
                    href="mailto:rhoda.romma@gmail.com"
                    className="btn btn-md primary-bg text-white rounded"
                  />
                  <p className="small text-muted mt-3 mb-0 roboto">
                    Replace the email link above with Romma &amp; Co Construction&apos;s actual business email before publishing.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
