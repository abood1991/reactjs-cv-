import React from "react";

export const Sidebar = () => {
  return (
    <div className="box">
      <ul className="links">
        <div className="link1">
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/abdel-khalaf-909985186/">
              linkedin <i className="fab fa-linkedin-in"></i>{" "}
            </a>
          </li>
          <br />
        </div>

        <div className="link2">
          <li>
            {" "}
            <a href="https://github.com/abood1991">
              {" "}
              github <i className="fab fa-github-square"></i>
            </a>
          </li>
        </div>
      </ul>

      <div id="contact-info" className="contact-info">
        <div className="card-style">
          <i className=" card-icon  fas fa-phone"></i>
          <p>+32465595879</p>
        </div>

        <div className="card-style">
          <i className=" card-icon  fas fa-envelope"></i>
          <p>abood.khalaf91@gmail.com</p>
        </div>

        <div className="card-style">
          <i className=" card-icon  fas fa-map-marker"></i>
          <p>liege-Belgium</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
