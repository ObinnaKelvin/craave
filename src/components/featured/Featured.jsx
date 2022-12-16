import "./featured.css"
import aoNang from "../../images/aoNang.jpg"
import bali from "../../images/bali.jpg"
import puntaCana from "../../images/puntaCana.jpg"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src={aoNang} alt="aoNang" className="featuredImg" />
            <div className="featureTitles">
                <h1>Ao Nang, Thailand</h1>
                <h2>103 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
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
        </div>
    </div>
  )
}

export default Featured