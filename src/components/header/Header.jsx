import "./header.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi, faTree } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import {useState, useEffect, useRef } from 'react'
import { format } from 'date-fns'//transform the dates to readable formats
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
// import Typical from 'react-typical'
import Typewriter from 'typewriter-effect';

const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]); 
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });     

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions(prev => { return {
      ...prev, [name]: operation === "i" ? options[name] +1 : options[name]-1
    }})
  }

  const handleSearch = () => {
      navigate("/hotels", { state: {destination, date, options}})
  }

  //We add a listener effect that activates 'false' which 
  // invokes the 'inactive' property to the dropdowns
  let menuRef = useRef();
  useEffect(() => { 
      let listener = (e) => {
        if(!menuRef.current.contains(e.target)) {
          setOpenOptions(false);
          setOpenDate(false);
          console.log(menuRef.current);          
        }

      }

      document.addEventListener("mousedown", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
      }
  }, [])
    
  return (
    <div className="header" ref={menuRef}>
      <Navbar />
      <div className= {type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faCar} />
          <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faTree} />
          <span>Attractions</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Airport Taxis</span>
          </div>
          {/* <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
          </div> */}
        </div>
        { type !== "list" &&
            <>  
                <div className="typical">
                    {/* <Typical
                      steps={['Travel...', 2000, 'Holiday...', 2000, 'Vacation...', 2000, 'Honeymoon...', 2000, 'Tourism...', 2000]}
                      loop={Infinity}
                      wrapper="p"
                    /> */}
                    <Typewriter 
                        onInit={(typewriter) => {
                          typewriter.typeString('Travel...').callFunction(() => {console.log('String typed out!');})
                            .pauseFor(2000)
                            .deleteAll()
                            .callFunction(() => {console.log('All strings were deleted');})
                            .typeString('Holiday...').pauseFor(2000).deleteAll()
                            .typeString('Vacation...').pauseFor(2000).deleteAll()
                            .typeString('Honeymoon...').pauseFor(2000).deleteAll()
                            .typeString('Tourism...').pauseFor(2000).deleteAll()
                            .start();
                        }}  
                        options={{
                          // strings: ['Hello', 'World'],
                          autoStart: true,
                          loop: true,
                        }}                   
                    />
                </div>

                <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
                <p className="headerDesc">
                  Get rewarded for your travels - unlock instant savings of 10% or more with a 
                  free Craave account
                </p>
                {/* <button className="headerBtn">Explore</button> */}
                <div className="headerSearch">
                  <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input 
                      type="text" 
                      placeholder="where are you going?" 
                      className="headerSearchInput"
                      onChange={(e) => setDestination(()=> e.target.value)}
                    />
                  </div>
                  <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span 
                      onClick={()=> setOpenDate(!openDate) } //Sweet Toggle function
                      className="headerSearchText">
                        {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                    </span>
                      {/* { openDate &&   */}
                          <div className={`date ${openDate? 'active': 'inactive'}`}>
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                // className = "date"
                                minDate={new Date()}
                            />
                          </div>
                      {/* } */}
                  </div>
                  <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span onClick={()=>setOpenOptions(!openOptions) } className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                      {/* { openOptions && */}
                        <div className={`options ${openOptions? 'active' : 'inactive'}`}>
                          <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                              <button disabled = {options.adult <= 1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                              <span className="optionCounterNumber">{`${options.adult}`}</span>
                              <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                            </div>
                          </div>
                          <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                              <button disabled = {options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                              <span className="optionCounterNumber">{`${options.children}`}</span>
                              <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>                  
                            </div>
                          </div>
                          <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                              <button disabled = {options.room <= 1}className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                              <span className="optionCounterNumber">{`${options.room}`}</span>
                              <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>                  
                            </div>

                          </div>
                        </div>                
                      {/* } */}

                  </div>
                  <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                  </div>
                </div>
            </>    
        }
      </div>
    </div>
  )
}

export default Header