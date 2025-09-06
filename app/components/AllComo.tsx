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
            <div id="about">
                <Abouts />
            </div>
            <div id="resume">
                <Resumes />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <ContactUs />
            </div>
        </>
    );
};

export default AllComo;
