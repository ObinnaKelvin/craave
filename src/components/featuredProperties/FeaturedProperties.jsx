import './featuredProperties.css'
import Wheatbaker from '../../images/wheatbaker.jpg'
// import FeaturedProperty from '../../images/featuredProperty.jpg'
import Protea from '../../images/protea.jpg'
import Sheraton from '../../images/sheraton.jpg'
import Bokku from '../../images/bokku.jpg'
import { useRef, useEffect, useState } from 'react'
import {motion} from 'framer-motion';

const FeaturedProperties = () => {    
    
    
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);




  return (
    <div className='fp'>

        <motion.div ref={carousel}  className="featuredp-carousel" whileTap={{cursor: "grabbing"}}>
            <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="featuredp-inner-carousel">

                <motion.div className="fpItem">
                    <img src={Bokku} alt="Bokku" className="fpImage" />
                    <span className="fpName">Bokku Picasa Hotels</span>
                    <span className="fpCity">Ogba</span>
                    <span className="fpPrice">$120 per night</span>
                    <div className="fpRating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>
                </motion.div>

                <motion.div className="fpItem">
                    <img src={Wheatbaker} alt="Wheatbaker" className="fpImage" />
                    <span className="fpName">The Wheatbaker</span>
                    <span className="fpCity">Ikoyi</span>
                    <span className="fpPrice">$70 per night</span>
                    <div className="fpRating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>
                </motion.div>

                <motion.div className="fpItem">
                    <img src={Protea} alt="Protea" className="fpImage" />
                    <span className="fpName">Protea Hotel</span>
                    <span className="fpCity">Ikeja</span>
                    <span className="fpPrice">$40 per night</span>
                    <div className="fpRating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>
                </motion.div>

                <motion.div className="fpItem">
                    <img src={Sheraton} alt="Sheraton" className="fpImage" />
                    <span className="fpName">Sheraton Hotel</span>
                    <span className="fpCity">Ikoyi</span>
                    <span className="fpPrice">$200 per night</span>
                    <div className="fpRating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>
                </motion.div>

            </motion.div>

        </motion.div>
        {/* <div className="fpItem">
            <img src={Bokku} alt="Bokku" className="fpImage" />
            <span className="fpName">Bokku Picasa Hotels</span>
            <span className="fpCity">Ogba</span>
            <span className="fpPrice">$120 per night</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src={Wheatbaker} alt="Wheatbaker" className="fpImage" />
            <span className="fpName">The Wheatbaker</span>
            <span className="fpCity">Ikoyi</span>
            <span className="fpPrice">$70 per night</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src={Protea} alt="Protea" className="fpImage" />
            <span className="fpName">Protea Hotel</span>
            <span className="fpCity">Ikeja</span>
            <span className="fpPrice">$40 per night</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src={Sheraton} alt="Sheraton" className="fpImage" />
            <span className="fpName">Sheraton Hotel</span>
            <span className="fpCity">Ikoyi</span>
            <span className="fpPrice">$200 per night</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div> */}
    </div>
  )
}

export default FeaturedProperties