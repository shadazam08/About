import React from "react";
import "./project.scss";
// import image1 from "../../Assets/bannerImage/Meesho.webp";
// import image2 from "../../Assets/bannerImage/netflix.jpg";
import Image from "next/image";

interface HeaderProps {
    id?: string;
}

const Projects: React.FC<HeaderProps> = ({ id }) => {
    return (
        <div id={id} className="projectBody">
            <div className="container">
                <div className="card">
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
                </div>
            </div>
        </div>
    );
};

export default Projects;
