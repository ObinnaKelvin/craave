import './footer.css'
import logo from '../../images/craave_logo_blue.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="fLists">

            <ul className="fList">
                <img src={logo} alt="a logo" className='fLogo' />
                <br /><br />
                {/* <li className="fListItem">Help Center</li>
                <li className="fListItem">COVID-19 Response</li>
                <li className="fListItem">Report a neighborhood concern</li>
                <li className="fListItem">Supporting people with disabilities</li>
                <li className="fListItem">Craave Cover</li> */}
            </ul>
            <ul className="fList">
                <span className='fHeaderText'>Support</span>
                <br /><br />
                <li className="fListItem">Help Center</li>
                <li className="fListItem">COVID-19 Response</li>
                <li className="fListItem">Report a neighborhood concern</li>
                <li className="fListItem">Supporting people with disabilities</li>
                <li className="fListItem">Disaster Relief Housing</li>
                <li className="fListItem">Combating Discrimination</li>
            </ul>
            <ul className="fList">
                <span className='fHeaderText'>Get Help</span>
                <br /><br />
                <li className="fListItem">How It Works</li>
                <li className="fListItem">FAQs</li>
                <li className="fListItem">Contact</li>
                <li className="fListItem">Terms</li>
                <li className="fListItem">Privacy Policy</li>
            </ul>
            <ul className="fList">
                <span className='fHeaderText'>Hosting</span>
                <br /><br />
                <li className="fListItem">Craave your home</li>
                <li className="fListItem">Craave for Hosts</li>
                <li className="fListItem">Exploring hosting resources</li>
                <li className="fListItem">Our community forum</li>
                <li className="fListItem">Host responsibly</li>
                {/* <li className="fListItem">Hotels</li> */}
            </ul>
            <ul className="fList">
                <span className='fHeaderText'>Places</span>
                <br /><br />
                <li className="fListItem">Countries</li>
                <li className="fListItem">Regions</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">District</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
            </ul>
        </div>

        <div className="fText">Copyright ©  Craave by Obinna Okere</div>
    </div>
  )
}

export default Footer