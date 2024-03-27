import React, { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './footer.scss'

const Footer = () => {
    const [value, setValue] = useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const CustomFontAwesomeIcon = ({ icon }) => {
        return (
            <div>
                <FontAwesomeIcon icon={icon} />
            </div>
        )
    }
    return (
        <>
            <BottomNavigation
                className='footers'
                sx={{ backgroundColor: '#2F2D2E', width: '100%' }}
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction
                    label=""
                    value="facebook"
                    icon={<CustomFontAwesomeIcon icon={faFacebookF} />}
                    component="a"
                    href="https://www.facebook.com/shad.azam.94"
                    target="_blank"
                />
                <BottomNavigationAction
                    label=""
                    value="twitter"
                    icon={<CustomFontAwesomeIcon icon={faTwitter} />}
                    component="a"
                    href="https://twitter.com/MShad_Azam4"
                    target="_blank"
                />
                <BottomNavigationAction
                    label="Linkedin"
                    value="linkedin"
                    icon={<CustomFontAwesomeIcon icon={faLinkedin} />}
                    component="a"
                    href="https://www.linkedin.com/in/shad-azam-ab9107244/"
                    target="_blank"
                />
                <BottomNavigationAction
                    label=""
                    value="github"
                    icon={<CustomFontAwesomeIcon icon={faGithub} />}
                    component="a"
                    href="https://github.com/shadazam08"
                    target="_blank"
                />
                <hr />
                <footer className="copyright">
                    &copy; 2023 Shad Azam
                </footer>
            </BottomNavigation>
        </>
    )
}

export default Footer
