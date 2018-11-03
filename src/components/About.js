import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="box-layout">
    <div className="box-layout__box--about">
      <p className="mission-statement">This tool was created to help journalists up-to-date on filings in the federal register.</p>
      <p>Users are emailed a compressed repository of PDFs (at their gmail address) at 9:00 a.m. Eastern Standard Time.</p>
      <p>The PDFs are downloaded from the federal register's <a href="https://www.federalregister.gov/public-inspection/current">public inspection</a> repository. Rules, notices, and other documents are filed under public inspection before their formal publication in the federal register. It is earliest point of access for the public.</p>
      <p>By default, users will recieve all filings for the departments they are tracking. To only recieve rules or proposed rules, turn off the "all filings" setting for the department.</p>
      <p>Users may also turn off "special collection" tracking, which scans for documents filed at unsual hours throughout the day.</p>
      <p>This application does not store any information about you, the user.</p>
      <p className="mission-statement">Send me an <a href="mailto:harrisoncramer@gmail.com">email</a> or message me or message me on Twitter, @harrisoncramer.</p>
      <Link to="/dashboard">
        <button className="button--secondary">Back</button>
      </Link>
    </div>
  </div>
);

export default About;