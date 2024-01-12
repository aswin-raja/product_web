import React, {useState} from "react";

export const Navigation = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  // Function to toggle the collapse state
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };


  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
          
            data-target="#bs-example-navbar-collapse-1"
           
            onClick={() => { handleNavCollapse(); }}
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            TECH TAC SOLUTIONS
          </a>{" "}
        </div>
{isNavCollapsed ? 
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll" onClick={() => { handleNavCollapse(); }}>
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" onClick={() => { handleNavCollapse(); }}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" onClick={() => { handleNavCollapse(); }}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll" onClick={() => { handleNavCollapse(); }}>
                Projects
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll" onClick={() => { handleNavCollapse(); }}>
                Testimonials
              </a>
            </li> */}
            <li>
              <a href="#team" className="page-scroll" onClick={() => { handleNavCollapse(); }}>
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={() => { handleNavCollapse(); }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        : <></> }
      </div>

    </nav>
  );
};
