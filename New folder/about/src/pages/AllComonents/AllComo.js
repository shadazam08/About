import React, { useEffect, useRef } from 'react'
import Abouts from '../about/Abouts'
import Resumes from '../resume/Resumes'
import ContactUs from '../contact/ContactUs'
import Header from '../header/Header';
import Projects from '../Project/Projects';
import { useLocation } from 'react-router-dom';

const AllComo = () => {
    const headerRef = useRef(null);
    const aboutRef = useRef(null);
    const resumeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const location = useLocation();
    useEffect(() => {
        const scrollToComponent = (ref) => {
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
        switch (location.pathname) {
            case '/':
                scrollToComponent(headerRef);
                break;
            case '/home':
                scrollToComponent(headerRef);
                break;
            case '/about':
                scrollToComponent(aboutRef);
                break;
            case '/resume':
                scrollToComponent(resumeRef);
                break;
            case '/projects':
                scrollToComponent(projectsRef);
                break;
            case '/contact':
                scrollToComponent(contactRef);
                break;
            default:
                window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location.pathname])
    return (
        <>
            <div ref={headerRef} id='home'>
                <Header />
            </div>
            <div ref={aboutRef} id='about'>
                <Abouts />
            </div>
            <div ref={resumeRef} id='resume'>
                <Resumes />
            </div>
            <div ref={projectsRef} id='projects'>
                <Projects />
            </div>
            <div ref={contactRef} id='contact'>
                <ContactUs />
            </div>
        </>
    )
}

export default AllComo