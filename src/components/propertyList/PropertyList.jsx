import './propertyList.css';
import Hotels from '../../images/hotels.jpg'
import Villas from '../../images/villas.jpg'
import Resorts from '../../images/resorts.jpg'
import Apartments from '../../images/apartments.jpg'
import Cabins from '../../images/cabins.jpg'
import { useRef, useEffect, useState } from 'react'
import {motion} from 'framer-motion';


const PropertyList = () => {

    const [width, setWidth] = useState(0);
	const carousel = useRef();
	useEffect(() => {
		console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);



  return (
    <div className='pList'>

        <motion.div ref={carousel}  className="property-carousel" whileTap={{cursor: "grabbing"}}>
            <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="property-inner-carousel">

                <motion.div className="pListItem">
                    <img src={Hotels} alt={Hotels} className="pListImg" />
                    <div className="pListTitles">
                        <h1>Hotels</h1>
                        <h2>233 hotels</h2>
                    </div>
                </motion.div>

                <motion.div className="pListItem">
                    <img src={Resorts} alt={Resorts} className="pListImg" />
                    <div className="pListTitles">
                        <h1>Resorts</h1>
                        <h2>233 hotels</h2>
                    </div>
                </motion.div>

                <motion.div className="pListItem">
                    <img src={Cabins} alt={Cabins} className="pListImg" />
                    <div className="pListTitles">
                        <h1>Cabins</h1>
                        <h2>233 hotels</h2>
                    </div>
                </motion.div>

                <motion.div className="pListItem">
                    <img src={Apartments} alt={Apartments} className="pListImg" />
                    <div className="pListTitles">
                        <h1>Apartments</h1>
                        <h2>233 hotels</h2>
                    </div>
                </motion.div>

                <motion.div className="pListItem">
                    <img src={Villas} alt={Villas} className="pListImg" />
                    <div className="pListTitles">
                        <h1>Villas</h1>
                        <h2>233 hotels</h2>
                    </div>
                </motion.div>

            </motion.div>
        </motion.div>
        {/* <div className="pListItem">
            <img src={Hotels} alt={Hotels} className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Resorts} alt={Resorts} className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Cabins} alt={Cabins} className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Apartments} alt={Apartments} className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Villas} alt={Villas} className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>233 hotels</h2>
            </div>
        </div> */}
    </div>
  )
}

export default PropertyList