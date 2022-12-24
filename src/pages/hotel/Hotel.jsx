import "./hotel.css"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { photos } from "./photos.jsx"
// import paladio1 from "../../images/paladio_1.jpg"
// import paladio2 from "../../images/paladio_2.jpg"
// import paladio3 from "../../images/paladio_3.jpg"
// import paladio4 from "../../images/paladio_4.jpg"
// import paladio5 from "../../images/paladio_5.jpg"
// import paladio6 from "../../images/paladio_6.jpg"
import { useState } from "react"

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {  open && 
          <div className="slider">
              blah! blah
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
                <img onClick={handleOpen} src={photo.src} alt={photo.alt} key={i} className="hotelImg" />
              </div>
            ))}
              {/* <div className="hotelImgWrapper">
                <img  src={paladio1} alt="" className="hotelImg" />
                <img src={paladio2} alt="" className="hotelImg" />
                <img src={paladio3} alt="" className="hotelImg" />
                <img src={paladio4} alt="" className="hotelImg" />
                <img src={paladio5} alt="" className="hotelImg" />
                <img src={paladio6} alt="" className="hotelImg" />
              </div> */}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Ikeja</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
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