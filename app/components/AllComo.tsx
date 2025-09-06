import React from "react";
import Abouts from "./Abouts";
import Resumes from "./Resumes";
import ContactUs from "./ContactUs";
import Header from "./Header";
import Projects from "./Projects";

const AllComo: React.FC = () => {
    return (
        <>
            <div id="home">
                <Header />
            </div>
            <div id="about" className="section">
                <Abouts />
            </div>
            <div id="resume" className="section">
                <Resumes />
            </div>
            <div id="projects" className="section">
                <Projects />
            </div>
            <div id="contact" className="section">
                <ContactUs />
            </div>
        </>
    );
};

export default AllComo;
