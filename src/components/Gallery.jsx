import coneImg from '../assets/images/desktop/image-gallery-cone.jpg'
import bottlesImg from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import orangeImg from '../assets/images/desktop/image-gallery-orange.jpg'
import cubesImg from '../assets/images/desktop/image-gallery-sugarcubes.jpg'

const Gallery = () => {
    return (
        <div className='gallery'>
            <img src={bottlesImg} alt="" />
            <img src={orangeImg} alt="" />
            <img src={coneImg} alt="" />
            <img src={cubesImg} alt="" />
        </div>
    )
}

export default Gallery