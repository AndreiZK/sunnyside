import customer1 from '../assets/images/image-emily.jpg'
import customer3 from '../assets/images/image-jennie.jpg'
import customer2 from '../assets/images/image-thomas.jpg'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <h2>CLIENT TESTIMONIALS</h2>
            <div className='test-container'>
                <div className='test'>
                    <img src={customer1} alt="" />
                    <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <h4>Emily R.</h4>
                    <h5>Marketing Director</h5>
                </div>
                <div className='test'>
                    <img src={customer2} alt="" />
                    <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                    <h4>Thomas S.</h4>
                    <h5>Cheif Operating Officer</h5>
                </div>
                <div className='test'>
                    <img src={customer3} alt="" />
                    <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    <h4>Jennie F.</h4>
                    <h5>Business Owner</h5>
                </div>
            </div>
        </div>
    )
}

export default Testimonials