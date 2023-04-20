import { useEffect, useState } from "react"

import hamburgetIcon from '../assets/images/icon-hamburger.svg'
import arrowDownIcon from '../assets/images/icon-arrow-down.svg'

const Hero = () => {

    const [windowWidth, setWindowWidth] = useState(1920)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleClick = () => {
        window.scroll({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
          })
    }


    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (e.target.id !== 'menu-btn' && !e.target.classList.contains('nav-list') && !e.target.classList.contains('menu-li')) setIsMenuOpen(false)
        })
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
    }, [windowWidth])

    return (
        <div className="hero">
            <nav className="nav">
                <h2>sunnyside</h2>
                <div className="menu">
                    {windowWidth < 600 && (
                        <div className="hamburger">
                            <input className="hamburger-input" type="checkbox" value={isMenuOpen}/>
                            <img src={hamburgetIcon} id="menu-btn" onClick={() => setIsMenuOpen(prevMenuOpen => !prevMenuOpen)} />
                        </div>)}
                    <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
                        <li className="menu-li">About</li>
                        <li className="menu-li">Services</li>
                        <li className="menu-li">Projects</li>
                        <li className="menu-li">Contact</li>
                    </ul>
                </div>
            </nav>
            <h1>
                WE ARE CREATIVES
            </h1>
            <img onClick={handleClick} className="arrow-down-icon" src={arrowDownIcon}/>
        </div>
    )
}

export default Hero