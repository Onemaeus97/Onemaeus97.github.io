import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yifan WANG</h2>
        <p><a href="ywang4@etud.insa-toulouse.fr">ywang4@etud.insa-toulouse.fr</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Yifan. I am a new bee in the world of information.
        I&apos;m currently a student specialized in CS at  <a href="https://www.insa-toulouse.fr/fr/index.html/">INSA Toulouse</a>,
        I have also studied 2 years at <a href="https://www.esigelec.fr/fr">ESIGELEC</a> and am a <a href="https://en.wikipedia.org/wiki/Hangzhou_Foreign_Languages_School/">HFLS alumini</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yifan WANG <Link to="/">ywang4@etud.insa-toulouse.fr</Link>.</p>
    </section>
  </section>
);

export default SideBar;
