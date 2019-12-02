import React from "react";

import "./App.css";

// you have to write (React.Component ) not just component
/* you put the props inside the <child name prop1="",prop2="",prop3=""/>
and you call them in the child by {this.props.prop1}, {this.props.prop2}....
*/
// note : this.props means the popreties of this coponent

/*   myfunction = a => {
    console.log(a.target.innerHTML);
  };


  note : always put the function outside the rendre ; just put the name of function 
  and inside the function put a parametre 
 */

import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Interests from "./components/interests";
import Languages from "./components/languages";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="info">
          <About />
          <Education />
          <Skills />
          <Interests />
          <Languages />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
