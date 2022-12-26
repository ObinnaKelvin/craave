import "./hotel.css"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { photos } from "./photos.jsx"
import { useState } from "react"

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {

    let newSlideNumber
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {  open && 
          <div className="slider">
              <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)}/>
              <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("l")}/>
              <div className="sliderWrapper">
                <img src={photos[slideNumber].src} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")}/>
          </div>
        }
        <div className="hotelWrapper">
          <button className="bookNow">Book Now!</button>
          <h1 className="hotelTitle">Paladio</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>30 Adeyemo Alakija Victoria Island, Lagos</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i)=> ( 
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt={photo.alt} key={i} className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Ikeja</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Ikeja, Tower
                Street Apartments has accomodations with air conditioning and free Wifi.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Ikeja, this property has an 
                excellent location score of 9.8!
              </span>
              <h2><b>$945</b> (9 nights)</h2>
              <button>Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel