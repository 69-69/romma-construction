import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { usefulLinks } from '../data.js';

const Widget = ({ list, title }) => (
  <div className="widget">
    <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">{title}</h4>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ id, title, href }) => (
        <li key={id} className="roboto">
          <NextLink href={href} title={title} />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top footer-bg overflow-hidden">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">
          <div className="col-xl-3">
            <div className="widget d-flex flex-column align-items-center">
              <div className="mb-5 d-flex justify-content-md-center justify-content-xxl-start w-100">
                <Image
                  src="/img/logo.webp"
                  alt="Romma & Co Construction"
                  width={200}
                  height={80}
                  unoptimized={true}
                  className="text-center"
                />
              </div>
              <p className="lead mb-2 text-md-center text-xl-start fs-18 roboto">
                Romma &amp; Co Construction delivers practical construction, installation,
                fitting, and finishing workmanship for residential and general construction projects.
              </p>
            </div>

            <div className="d-flex align-items-xl-start align-items-md-center flex-column">
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <Widget list={usefulLinks} title="Quick Links" />
          </div>

          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Our Services</h4>
              <ul className="list-unstyled text-reset mb-0 roboto">
                <li>General Construction</li>
                <li>Electrical Installation</li>
                <li>Carpentry &amp; Woodworking</li>
                <li>Masonry &amp; Concrete Work</li>
                <li>Floor &amp; Tile Installation</li>
                <li>Fitting &amp; Maintenance</li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Start a Conversation</h4>
              <p className="roboto">
                Ready to discuss a project? Visit the contact section to share your requirements,
                project type, and preferred timeline.
              </p>

              {/* Email */}
              <div className="d-flex mb-1 align-items-center">
                <i className="uil uil-envelope fs-26 text-main" />
                <a href="mailto:rommaco65@gmail.com" className="link-body ms-2 roboto">
                  rommaco65@gmail.com
                </a>
              {/* Phone Numbers */}
              </div>

              <div className="d-flex">
                <i className="uil uil-phone-volume fs-26 text-main" />
                <p className="mt-1 ms-2 fs-18 d-flex flex-column roboto">
                  <a href="tel:+19712603951">+1-971-260-3951</a>
                </p>
              </div>
              <NextLink
                href="#contact"
                title="Contact Romma & Co Construction"
                className="btn btn-sm primary-bg text-white rounded"
              />
            </div>
          </div>

          <hr className="mt-4 mt-md-4 mb-7" />

          <div className="d-md-flex align-items-center justify-content-center">
            <p className="mb-2 mb-lg-0 text-center roboto">
              © {currentYear} Romma &amp; Co Construction. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
