import React,  { useState } from 'react'
import './list.css'
import NavBar from '../../components/navbar/Navbar.jsx';
import Header from '../../components/header/Header.jsx';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns'//transform the dates to readable formats
import { DateRange } from 'react-date-range';

const List = () => {
  
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  return (
    <div>
      <NavBar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" value={destination} onChange={(e)=> setDestination(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              <span onClick={()=> setOpenDate(!openDate)}>
              {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {
                openDate && 
                <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()} //So that the date range selection starts from today's date
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              }
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min price <small>per night</small></span>
              </div>
            </div>
          </div>
          <div className="listResult">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default List