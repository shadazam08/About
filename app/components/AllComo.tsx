// "use client";

// import React, { useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import Abouts from "../about/page";
// import Resumes from "../resume/page";
// import ContactUs from "../contact/page";
// import Header from "../components/Header";
// import Projects from "../projects/page";

// const AllComo: React.FC = () => {
//     const headerRef = useRef<HTMLDivElement>(null);
//     const aboutRef = useRef<HTMLDivElement>(null);
//     const resumeRef = useRef<HTMLDivElement>(null);
//     const projectsRef = useRef<HTMLDivElement>(null);
//     const contactRef = useRef<HTMLDivElement>(null);

//     const pathname = usePathname();

//     useEffect(() => {
//         const scrollToComponent = (ref: React.RefObject<HTMLDivElement | null>) => {
//             if (ref.current) {
//                 ref.current.scrollIntoView({ behavior: "smooth" });
//             }
//         };

//         switch (pathname) {
//             case "/":
//             case "/home":
//                 scrollToComponent(headerRef);
//                 break;
//             case "/about":
//                 scrollToComponent(aboutRef);
//                 break;
//             case "/resume":
//                 scrollToComponent(resumeRef);
//                 break;
//             case "/projects":
//                 scrollToComponent(projectsRef);
//                 break;
//             case "/contact":
//                 scrollToComponent(contactRef);
//                 break;
//             default:
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//         }
//     }, [pathname]);

//     return (
//         <>
//             <div ref={headerRef} id="home">
//                 <Header />
//             </div>
//             <div ref={aboutRef} id="about">
//                 <Abouts />
//             </div>
//             <div ref={resumeRef} id="resume">
//                 <Resumes />
//             </div>
//             <div ref={projectsRef} id="projects">
//                 <Projects />
//             </div>
//             <div ref={contactRef} id="contact">
//                 <ContactUs />
//             </div>
//         </>
//     );
// };

// export default AllComo;



"use client";

import React from "react";
import Abouts from "../about/page";
import Resumes from "../resume/page";
import ContactUs from "../contact/page";
import Header from "../components/Header";
import Projects from "../projects/page";

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
