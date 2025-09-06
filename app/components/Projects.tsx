"use client";
import React, { useEffect } from "react";
import "./project.scss";
// import image1 from "../../Assets/bannerImage/Meesho.webp";
// import image2 from "../../Assets/bannerImage/netflix.jpg";
import Image from "next/image";

interface HeaderProps {
    id?: string;
}

const Projects: React.FC<HeaderProps> = ({ id }) => {
    const [getData, setGetData] = React.useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getProject');
                const data = await response.json();
                setGetData(data);
                console.log(data); // Log the fetched data
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div id={id} className="projectBody">
            <div className="container">
                {getData.length > 0 ? (
                    getData.map((project: { _id: string; projectImage: string; projectName: string; projectDescription: string; projectLink: string; liveDemoLink?: string }) => (
                        <div className="card" key={project._id}>
                            <div className="face">
                                <div className="face1">
                                    <div className="content">
                                        <Image src={project.projectImage} alt={project.projectName} fill className="img" />
                                        <h3>{project.projectName}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="face">
                                <div className="face2">
                                    <div className="content">
                                        <p style={{ marginTop: "5px" }}>{project.projectDescription}</p>
                                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                                            Read More
                                        </a>
                                        {project.liveDemoLink && (
                                            <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading projects...</p>
                )}
                {/* Static Example Card */}

                {/* <div className="card">
                    <div className="face">
                        <div className="face1">
                            <div className="content">
                                <Image src={'/bannerImage/Meesho.webp'} alt="Meesho Clone" fill className="img" />
                                <h3>Meesho-Colone</h3>
                            </div>
                        </div>
                    </div>
                    <div className="face">
                        <div className="face2">
                            <div className="content">
                                <p style={{ marginTop: "5px" }} >This project is an Meesho Clone Website developed as part of the Newton School SkillBuild.</p>
                                <a href="https://github.com/shadazam08/meesho-colone/blob/master/README.md" target="_blank">
                                    Read More
                                </a>
                                <a href="https://meesho-colone.vercel.app/" target="_blank">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="face">
                        <div className="face1">
                            <div className="content">
                                <Image src={'/bannerImage/netflix.jpg'} alt="Netflix Clone" fill className="img" />
                                <h3>Netflix Clone</h3>
                            </div>
                        </div>
                    </div>
                    <div className="face">
                        <div className="face2">
                            <div className="content">
                                <p style={{ marginTop: "5px" }}>This project is an Netflix Clone Website developed as part of the Newton School SkillBuild.</p>
                                <a href="https://github.com/shadazam08/netflix-clone/blob/main/README.md" target="_blank">
                                    Read More
                                </a>
                                <a href="https://netflix-clone-nine-tawny.vercel.app/" target="_blank">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;
