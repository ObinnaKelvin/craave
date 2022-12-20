import './searchItem.css'
import paladio from '../../images/paladio.jpg'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src={paladio} alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Paladio</h1>
            <span className="siDistance">500m from center</span>
            <div className="freebies">
                <span className="siFrees">Wi-fi</span>
                <span className="siFrees">Free airport taxi</span>
                <span className="siFrees">Coffee</span>
                <span className="siFrees">Swimming pool</span>
                <span className="siFrees">Spa</span>
                <span className="siFrees">Gym</span>
            </div>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures">Entire studio | 1 bathroom | 21m² 1 full bed</span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel anytime.
            </span>
        </div>
        <div className="siDetails">Detail</div>
    </div>
  )
}

export default SearchItem