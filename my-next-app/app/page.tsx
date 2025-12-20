"use client";
import Header from "./Header/page";
import Services from "./Services/page";
import Resume from "./Resume/page";
import Work from "./Work/page";
import Project from "./Project/page";

import Contact from "./Contact/page";
import AchievementsPage from "./acheivements/AcheivementsPage";
import FooterPage from "./Footer/FooterPage";

// import Footer from "./Footer/page.tsx";

export default function Home() {
  return (
    <>
      <section id="home">
        <Header />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="project">
        <Project />
      </section>

     <section id="AcheivementsPage">
        <AchievementsPage />
      </section> 

      <section id="contact">
        <Contact />
      </section>
      <FooterPage/>
    </>
  );
}
