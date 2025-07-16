import React from 'react';

export const Careers = () => {
  return (
    <div id="careers" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Join Our Team</h2>
          <p>
            We're always looking for talented individuals to join our growing team. 
            Explore exciting career opportunities at Stack & Queue.
          </p>
        </div>
        
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="careers-content">
              <h3>Current Openings</h3>
              
              <div className="job-listing">
                <h4>Full Stack Developer</h4>
                <p><strong>Location:</strong> Remote/Hybrid</p>
                <p><strong>Type:</strong> Full-time</p>
                <p>We're seeking a skilled Full Stack Developer to join our team...</p>
                <button className="btn btn-custom">Apply Now</button>
              </div>
              
              <div className="job-listing">
                <h4>UI/UX Designer</h4>
                <p><strong>Location:</strong> Remote/Hybrid</p>
                <p><strong>Type:</strong> Full-time</p>
                <p>Join our design team to create amazing user experiences...</p>
                <button className="btn btn-custom">Apply Now</button>
              </div>
              
              <div className="job-listing">
                <h4>DevOps Engineer</h4>
                <p><strong>Location:</strong> Remote/Hybrid</p>
                <p><strong>Type:</strong> Full-time</p>
                <p>Help us build and maintain scalable infrastructure...</p>
                <button className="btn btn-custom">Apply Now</button>
              </div>
              
              <div className="careers-cta">
                <h3>Don't see a position that fits?</h3>
                <p>
                  We're always interested in hearing from talented professionals. 
                  Send us your resume and let us know how you'd like to contribute to our team.
                </p>
                <button className="btn btn-custom">Send Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
