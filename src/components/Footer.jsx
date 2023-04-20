import iconFB from '../assets/images/icon-facebook.svg'
import iconInst from '../assets/images/icon-instagram.svg'
import iconPinterest from '../assets/images/icon-pinterest.svg'
import iconTwitter from '../assets/images/icon-twitter.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <h3>sunnyside</h3>
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                </ul>
                <div className="icons">
                    <img src={iconFB} alt="" />
                    <img src={iconInst} alt="" />
                    <img src={iconPinterest} alt="" />
                    <img src={iconTwitter} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer