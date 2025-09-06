import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './about.scss';
import Image from 'next/image';

interface HeaderProps {
    id?: string;
}

const Abouts: React.FC<HeaderProps> = ({ id }) => {
    return (
        <section className='about' id={id}>
            <div className='row'>
                <div className="image-column">
                    <Image className="profile-pic" src={'/shadazam.jpg'} alt="profil" width={120} height={120} />
                    {/* <img  src={profilePic} alt="" /> */}
                </div>
                <div className='main-col'>
                    <h2>About Me</h2>
                    <p>
                        I have a total of over 6 years of experience in Desktop Support and 3 month of experience in React JS , I know a lot about
                        Reactive Programming, Object Oriented Design, and Client-Server Communication,
                        Optimization and a lot of other things. I possess a very critical approach to data structures and algorithms.
                        Ask Me Anything!
                        <br /><br />
                        I am regarded as a self-motivated and well organized team player, I am able to create flexible work
                        environment with ability to deliver under minimal supervision and as a valuable contributor to the team.
                        <br /><br />
                        I also had opportunity to oversee and mentor a small team of developers.
                        <br /><br />
                    </p>
                    <div className='row'>
                        <div className='contact-details'>
                            <h2>Contact Details</h2>
                            <p className='address'>
                                <a>Shad Azam</a><br />
                                <a>Bihar, India </a><br />
                                <a href="tel:+918750665763">Mobile: (+91) 81-3060-3443</a><br />
                                <a href="mailto:azamshad08@gmail.com">Email: azamshad08@gmail.com</a><br />
                            </p>
                        </div>
                        <div className='download'>
                            <p>
                                <a href={'/resume/Shad_Azam_Resume.pdf'} className="button" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDownload} className='download-icon' />Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Abouts;
