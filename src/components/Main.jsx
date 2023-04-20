import eggImg from '../assets/images/desktop/image-transform.jpg'
import pinkImg from '../assets/images/desktop/image-stand-out.jpg'
import cherryImg from '../assets/images/desktop/image-graphic-design.jpg'
import orangeImg from '../assets/images/desktop/image-photography.jpg'


const Main = () => {

    //change images to those from the mobile folder if window width is less than 600

    return(
        <div className="main">
            <div className="main-item">
                <div className='card'>
                    <h2>Transform your brand</h2>
                    <p>We are a full-service creative agency specializing in helping brands grow fast. 
                        Engage your clients through compelling visuals 
                        that do most of the marketing for you.</p>
                    <a href="#">LEARN MORE</a>
                </div>
            </div>
            <div className="main-item">
                <img src={eggImg} alt="" />
            </div>
            <div className="main-item">
                <img src={pinkImg} alt="" />
            </div>
            <div className="main-item">
                <div className='card'>
                    <h2>Stand out to the right audience</h2>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
                        we’ll build and extend your brand in digital places. </p>
                    <a href="#" className='red'>LEARN MORE</a>
                </div>
            </div>
            <div className="main-item feature" style={{backgroundImage: `url('${cherryImg}')`, color: 'hsl(167, 40%, 24%)'}}>
                <h2>Graphic design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis velit dolore, quo non asperiores.</p>
            </div>
            <div className="main-item feature" style={{backgroundImage: `url('${orangeImg}')`, color: 'hsl(198, 62%, 26%)'}}>
                <h2>Photography</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis velit dolore, quo non asperiores.</p>
            </div>
        </div>
    )
}

export default Main