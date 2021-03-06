import React from 'react'

const Contact = () =>
  <div>
    <h1>Contact Me!</h1>
    <p className='contact-message'>
      Feel free to reach out to me on any of the mediums below. I'll be sure to respond as soon as possible,
       almost always within 12 hours, and we can discuss a time to setup a phone conference.
    </p>
    <div className="row contactRow">
      <div className='col-md-4 col-sm-12'>
        <a href="https://www.linkedin.com/in/arizzodev/" target="_blank"><i className="fab fa-linkedin fa-10x"></i></a>
      </div>
      <div className='col-md-4 col-sm-12'>
        <a href="https://twitter.com/arizzo_dev" target="_blank"><i className="fab fa-twitter-square fa-10x"></i></a>
      </div>
      <div className='col-md-4 col-sm-12'>
        <a href="mailto:arizzo.dev@gmail.com?subject=Freelance Work"><i class="fas fa-envelope fa-10x"></i></a>
      </div>
    </div>
  </div>

export default Contact
