import React from 'react';

export const Projects = ({ data }) => {
  return (
    <div id="projects-page" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Projects</h2>
          <p>
            Explore our comprehensive portfolio of successful projects. Each solution demonstrates our commitment to innovation, quality, and client satisfaction.
          </p>
        </div>
        
        <div className="row">
          <div className="col-md-12">
            <div className="projects-grid">
              {data && data.length > 0
                ? data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="project-card-wrapper">
                    <div className="project-card">
                      <div className="project-image-container">
                        <img src={d.smallImage} alt={d.title} className="project-image" />
                      </div>
                      <div className="project-content">
                        <div className="project-header">
                          <h3>{d.title}</h3>
                          <div className={`project-status ${d.link && d.link !== "#" ? 'live' : 'coming-soon'}`}>
                            {d.link && d.link !== "#" ? 'Live' : 'Coming Soon'}
                          </div>
                        </div>
                        <div className="project-footer">
                          {d.link && d.link !== "#" ? (
                            <a href={d.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                              <i className="fa fa-external-link"></i> View Project
                            </a>
                          ) : (
                            <button className="btn btn-secondary" disabled>
                              <i className="fa fa-clock-o"></i> Coming Soon
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
                : (
                  <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading projects...</p>
                  </div>
                )}
            </div>
              
            <div className="projects-cta">
              <div className="cta-content">
                <h3>Ready to Start Your Project?</h3>
                <p>
                  Let's collaborate to bring your vision to life. We're here to help you achieve your goals with innovative solutions and expert guidance.
                </p>
                <a href="#contact" className="btn btn-cta">
                  <i className="fa fa-rocket"></i> Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
