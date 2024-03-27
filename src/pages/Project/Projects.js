import React from 'react'
import './project.scss';
import image1 from '../../Assets/bannerImage/Meesho.webp'


const Projects = ({ id }) => {
    return (
        <div id={id} className='projectBody'>
            <div className="container">
                <div className="card">
                    <div className="face">
                        <div className='face1'>
                            <div className="content">
                                <img src={image1} />
                                <h3>Meesho-Colone</h3>
                            </div>
                        </div>
                    </div>
                    <div className="face">
                        <div className='face2'>
                            <div className="content">
                                <p style={{ marginTop: '5px' }}>This project is an Meesho Clone Website developed as part of the Newton School SkillBuild.
                                </p>
                                <a href="https://github.com/shad-azam/meesho-colone/blob/main/README.md" target='_blank'>Read More</a>
                                <a href="https://meesho-colone.vercel.app/" target='_blank'>Live Demo</a>
                            </div>
                        </div>
                    </div>

                        <div className="face">
                        <div className='face2'>
                            <div className="content">
                                <p style={{ marginTop: '5px' }}>This project is an Meesho Clone Website developed as part of the Newton School SkillBuild.
                                </p>
                                <a href="https://github.com/shad-azam/meesho-colone/blob/main/README.md" target='_blank'>Read More</a>
                                <a href="https://meesho-colone.vercel.app/" target='_blank'>Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects
