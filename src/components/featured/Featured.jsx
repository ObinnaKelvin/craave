import "./featured.css"
import aoNang from "../../images/aoNang.jpg"
import bali from "../../images/bali.jpg"
import puntaCana from "../../images/puntaCana.jpg"
import mumbai from "../../images/bg2.jpg"
import { useRef, useEffect, useState } from 'react'
import {motion} from 'framer-motion';


const Featured = () => {
    const [width, setWidth] = useState(0);
	const carousel = useRef();
	useEffect(() => {
		console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);


  return (
    <div className="featured">

        <motion.div ref={carousel}  className="featured-carousel" whileTap={{cursor: "grabbing"}}>
            <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="featured-inner-carousel">

                <motion.div className="featuredItem">
                    <img src={aoNang} alt="aoNang" className="featuredImg" />
                    <div className="featureTitles">
                        <h1>Ao Nang, Thailand</h1>
                        <h2>103 properties</h2>
                    </div>
                </motion.div>
                
                <motion.div className="featuredItem">
                    <img src={mumbai} alt="mumbai" className="featuredImg" />
                    <div className="featureTitles">
                        <h1>Mumbai, India</h1>
                        <h2>427 properties</h2>
                    </div>
                </motion.div>

                <motion.div className="featuredItem">
                    <img src={bali} alt="aoNang" className="featuredImg" />
                    <div className="featureTitles">
                        <h1>Bali, Indonesia</h1>
                        <h2>271 properties</h2>
                    </div>
                </motion.div>

                <motion.div className="featuredItem">
                    <img src={puntaCana} alt="aoNang" className="featuredImg" />
                    <div className="featureTitles">
                        <h1>Punta Cana, Dominican Republic</h1>
                        <h2>96 properties</h2>
                    </div>
                </motion.div>

            </motion.div>					
        </motion.div>

        {/* <div className="featuredItem">
            <img src={bali} alt="aoNang" className="featuredImg" />
            <div className="featureTitles">
                <h1>Bali, Indonesia</h1>
                <h2>271 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src={puntaCana} alt="aoNang" className="featuredImg" />
            <div className="featureTitles">
                <h1>Punta Cana, Dominican Republic</h1>
                <h2>96 properties</h2>
            </div>
        </div> */}
    </div>
  )
}

export default Featured