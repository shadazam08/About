import React from 'react'
import './ContactUs.scss';

interface HeaderProps {
    id?: string;
}


const ContactUsPage: React.FC<HeaderProps> = ({ id }) => {
    return (
        <section className="contact" id={id}>
            <div className="row">
                <div className='section-head'>
                    <h1 className="get-in-touch"><span>Get In Touch.</span></h1>
                </div>
            </div>
            <div className="row">
                <div className="leftSide">
                    <h4>Address</h4>
                    <p className="address">
                        <span>
                            <a>Shad Azam</a><br />
                            <a>C/O : Md Sayeed Akhtar</a><br />
                            <a>Ward 38,</a><br />
                            <a>Mohallah : Chakzohra</a><br />
                            <a>Post : Laheria Sarai</a><br />
                            <a>Police Station : Laheria Sarai</a><br />
                            <a>District : Darbhanga</a><br />
                            <a>Bihar-846001, India</a><br />
                        </span>
                    </p>
                </div>
                <div className="rightSide">
                    <h4>Email and Skype id</h4>
                    <p className="address">
                        <span><a href="tel:+918750665763">Mobile : (+91) 81-3060-3443</a></span><br />
                        <span><a href="mailto:azamshad08@gmail.com">Email : azamshad08@gmail.com</a></span><br />
                        <span><a href="https://join.skype.com/invite/vQxNMXGssbTq">Skype Name : shadazam08</a></span><br />
                    </p>
                </div>

            </div>
        </section>
    )
}

export default ContactUsPage;