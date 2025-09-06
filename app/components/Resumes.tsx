"use client";
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import './resume.scss';

interface HeaderProps {
    id?: string;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    width: 700,
    maxWidth: '95%',
    margin: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 100],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1af526' : '#308fe8',
    },
}));


const Resumes: React.FC<HeaderProps> = ({ id }) => {
    return (
        <section className='work' id={id}>
            {/* <hr /> */}
            {/* start the Work */}
            <div className='row'>
                <div className='header-col'>
                    <div className='itemWork'>
                        <h1>Work</h1>
                    </div>
                </div>
                <div className='main-col'>
                    <h3>Web Developer @ Bazaar 247 Mcommerce Pvt Ltd</h3>
                    <p className="info">Software Engineer (October 2023 – Present)</p>
                    <p>
                        <span>&bull;</span> Website and software application, building, or maintaining.
                        <br /><br />
                        <span>&bull;</span> Integrate data from various back-end services and databases.
                        <br /><br />
                        <span>&bull;</span> Adequate knowledge of relational database systems, Object Oriented Programming and web application development.
                        <br /><br />
                        <span>&bull;</span> Improved boot performance by adding metrics of load bucket times, caching all assets and different API calls,Directing or performing Website updates.
                    </p>
                    <h3><a>Bharat IT Services</a></h3>
                    <p className="info">Desktop Support (April 2022 - September 2023)</p>
                    <p>
                        <span>&bull;</span> Install, upgrade, support and troubleshoot XP, Windows 10,11 and Microsoft Office 2016 and any other authorized desktop
                        applications.
                        <br /><br />
                        <span>&bull;</span> Handling data network and server management, and testing network connections.
                        <br /><br />
                        <span>&bull;</span> Develop trends by monitoring and analyzing incoming calls, problems and support requests.
                        <br /><br />
                        <span>&bull;</span> Performs general preventative maintenance tasks on computers, laptops, printers and any other authorized peripheral equipment.
                    </p>
                    <h3><a>Ace Brain Pvt.ltd</a></h3>
                    <p className="info">Desktop Support (February 2021 - April 2022)</p>
                    <p>
                        <span>&bull;</span> Install, upgrade, support and troubleshoot XP, Windows 10,11 and Microsoft Office 2016 and any other authorized desktop
                        applications.
                        <br /><br />
                        <span>&bull;</span> Handling data network and server management, and testing network connections.
                        <br /><br />
                        <span>&bull;</span> Develop trends by monitoring and analyzing incoming calls, problems and support requests.
                        <br /><br />
                        <span>&bull;</span> Performs general preventative maintenance tasks on computers, laptops, printers and any other authorized peripheral equipment.
                    </p>
                    <h3><a>ECOS(I) Mobility and Hospitality pvt.ltd</a></h3>
                    <p className="info">Desktop Support (November 2017 - July 2020)</p>
                    <p>
                        <span>&bull;</span> Install, upgrade, support and troubleshoot XP, Windows 10,11 and Microsoft Office 2016 and any other authorized desktop
                        applications.
                        <br /><br />
                        <span>&bull;</span> Handling data network and server management, and testing network connections.
                        <br /><br />
                        <span>&bull;</span> Develop trends by monitoring and analyzing incoming calls, problems and support requests.
                        <br /><br />
                        <span>&bull;</span> Performs general preventative maintenance tasks on computers, laptops, printers and any other authorized peripheral equipment.
                    </p>
                </div>
            </div>
            <hr />
            {/* End the work */}

            {/* Start the Education */}
            <div className='eduction'>
                <div className='header-col'>
                    <div className='itemWork'>
                        <h1>Education</h1>
                    </div>
                </div>
                <div className='main-col'>
                    <h3>Diploma in computer Science Engineering</h3>
                    <p className="info">Computer Science and Engineering (Aguest 2010 – March 2013)</p>
                    <p>
                        Specialization in Computer Science and Engineering degree from Maulan Azad National Urdu University Hyderabad.
                    </p>
                    <h3>Bachelor of Commerce (Accounts)</h3>
                    <p className="info">Bachelor of Commerce (Accounts) (May 2007 – July 2010)</p>
                    <p>
                        Specialization in Account degree from Chandradhari Mithila College, Darbhanga.
                    </p>
                    <h3>Intermediate (Class XII) (Accounts)</h3>
                    <p className="info">Intermediate of Commerce (Accounts) (April 2005 – April 2007)</p>
                    <p>
                        Specialization in Account from Kunwar Singh College, Laheriasarai, Darbhanga.
                    </p>
                    <h3>Matriculation (Class X)</h3>
                    <p className="info">Matriculation (Class X) (April 2004 – March 2005)</p>
                    <p>
                        Matriculation (Class X) from B K D Boys and Girls High School, Darbhanga.
                    </p>
                </div>
            </div>
            <hr />
            {/* End of Eduction */}

            {/* Start of Certifications */}
            <div className='certification'>
                <div className='header-col'>
                    <div className='itemWork'>
                        <h1>Certifications</h1>
                    </div>
                </div>
                <div className='main-col'>
                    <h3>FullStack Web Development</h3>
                    <p className="info">Newton School</p>
                    <p>
                        Specialization in Full Stack Web Development. React JS and DSA with JAVA Participate in various coding contest.
                    </p>
                    <h3>Oracal 10g</h3>
                    <p className="info">Info Institute of Computer Technology</p>
                    <p>
                        Specialization in Oracal 10g
                    </p>

                </div>
            </div>
            <hr />
            {/* End of Certifications */}

            {/* Start of Skills */}
            <div className='skill'>
                <div className='header-col'>
                    <div className='itemWork'>
                        <h1>Skills</h1>
                    </div>
                </div>
                <div className='main-col'>
                    <Box sx={{ marginRight: 50, color: "#fff" }}>
                        HTML
                        <BorderLinearProgress variant="determinate" value={95} />
                    </Box>
                    <Box sx={{ marginRight: 50, color: "#fff" }}>
                        CSS
                        <BorderLinearProgress variant="determinate" value={85} />
                    </Box>
                    <Box sx={{ marginRight: 50, color: "#fff" }}>
                        JavaScript
                        <BorderLinearProgress variant="determinate" value={80} />
                    </Box>
                    <Box sx={{ marginRight: 50, color: "#fff" }}>
                        ReactJs
                        <BorderLinearProgress variant="determinate" value={80} />
                    </Box>
                    <Box sx={{ marginRight: 50, color: "#fff" }}>
                        MySQL/PostgreSQL
                        <BorderLinearProgress variant="determinate" value={40} />
                    </Box>

                </div>
            </div>
            {/* End of Skills */}
        </section>
    )
}

export default Resumes