import { Fragment } from 'react';
import Head from 'next/head';

import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import WhyChoose from 'components/WhyChoose';
import Projects from 'components/Projects';
import Contact from 'components/Contact';

const Home = () => {
  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>Romma &amp; Co Construction | Construction &amp; Installation Services</title>
        <meta
          name="description"
          content="Romma & Co Construction provides hands-on construction, electrical installation, carpentry, masonry, flooring, fitting, and general construction services."
        />
      </Head>

      <main className="content-wrapper overflow-hidden">
        <Hero />

        <section id="about" className="wrapper">
          <div className="container py-12 py-md-14">
            <About
              subHeading="About Romma & Co Construction"
              headingH1="Building"
              span="With Practical Experience"
              para="Romma & Co Construction is a hands-on construction firm focused on dependable workmanship across residential and general construction applications. Our experience covers drilling and equipment fitting, electrical installation, lighting and socket work, CCTV positioning and basic connections, concrete preparation, bricklaying, carpentry, tiling, and general construction maintenance."
              para2="We approach each task with attention to measurements, alignment, fitting, finishing, safe tool use, and proper material handling. Our goal is simple: deliver practical construction work that is built carefully and completed to project requirements."
              para3="From early installation and structural support through finishing details, we bring a versatile set of construction skills to every project."
              imgPosition="left"
              src="/img/welcome-to-constructions.webp"
              btnTitle="View Our Projects"
              btnUrl="#projects"
            />
          </div>
        </section>

        <section className="wrapper whychoose-bg">
          <div className="container py-14 py-md-16">
            <WhyChoose />
          </div>
        </section>

        <Projects />
        <Contact />
      </main>
    </Fragment>
  );
};

export default Home;
