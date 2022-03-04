import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import DarkModeToggle from "react-dark-mode-toggle";
import logo from "../assets/logo/cplogo.png"
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setSticky(window.pageYOffset > 140);
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark shadow p-3 mb-5  ${
          sticky && "Nav"
        }`}
      >
        <div className="container-fluid cnav">
          <a className="navbar-brand" href="/">
          <img src={logo} className="img-fluid logo" />

          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://www.cwipedia.in"
                >
                  blog
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  aria-expanded="false"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                >
                  Diploma Engineering
                </a>
                <ul aria-labelledby="navbarDropdown" className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/p/msbte-e-content.html"
                  >
                    MSBTE E-content <span className="badge ">New</span>
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/p/msbte-computer-engineering-group-mcqs.html"
                  >
                    MSBTE MCQ Question Banks
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/p/msbte-computerit-6th-sem-mcq-pdf.html"
                  >
                    Download 6th SEM MCQ
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/p/msbte-mcqs.html"
                  >
                    MSBTE MCQs 6th Sem{" "}
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/p/msbte-5th-semester-mcqs-computer.html"
                  >
                    MSBTE MCQs 5th Sem{" "}
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/p/msbte-4th-semester-mcqs-computer.html "
                  >
                    MSBTE MCQs 4th Sem
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/p/msbte-3rd-semester-mcqs-computer.html"
                  >
                    MSBTE MCQs 3rd Sem{" "}
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/p/msbte-2nd-semester-mcq.html"
                  >
                    MSBTE MCQs 2nd Sem
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/p/blog-page.html"
                  >
                    Sample Question Paper
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/p/msbte-i-scheme-syllabus-for-all-diploma.html"
                  >
                    I Scheme Syllabus
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/p/msbte-model-answer.html"
                  >
                    Model Answer Paper
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/2021/04/msbte-manual-i-scheme.html"
                  >
                    MSBTE Lab Manuals{" "}
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/search/label/Exam"
                  >
                    Online Exam Practice
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/search/label/Com"
                  >
                    Computer
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/search/label/Civil"
                  >
                    Civil
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/search/label/Mech"
                  >
                    Mechnaical
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/search/label/Ele"
                  >
                    Electrical
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/p/msbte-e-mcq-ejeneqetex-group.html"
                  >
                    EJ/EN/EQ/ET/EX Dept MCQ{" "}
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cwipedia.in/search/label/Notes"
                  >
                    <b>Notes</b>
                  </a>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://career.cwipedia.in">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.cwipedia.in/p/contact-us-demofont-familyarial.html"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.cwipedia.in/p/terms-and-conditions.html"
                >
                  Terms
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                            <a className="nav-link btn" aria-current="page" href="#">SignIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn" aria-current="page"  href="#">SignUp</a>
                        </li> */}
                {/* <DarkModeToggle
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={60}
                                /> */}
              </ul>              
            </div>
            {/* <div className="d-flex justify-content-right">
              <Link to="/login">
                <button type="button" className="btn btn-primary cbtn">Login</button>
              </Link>

              <Link to='/Register'>               
                <button type="button" className="btn btn-secondary cbtn">Create Account</button>
              </Link>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
