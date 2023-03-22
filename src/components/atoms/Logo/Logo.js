import PropTypes from 'prop-types'

import RecordStoreDay from '../../../resources/img/record-store-day.svg'
import DiscPayoffWhite from '../../../resources/img/disc-payoff-white.svg'
import DiscPayoff from '../../../resources/img/disc-payoff.svg'
import RuntimeRecordsWhite from '../../../resources/img/runtime-records-logo-white.svg'
import RuntimeRecords from '../../../resources/img/runtime-records-logo.svg'

/// TODO: Define props for Logo
const Logo = ({color}) => {

    if (color === "white") {
        return(
        <div className="WhiteLogo">
            <img src= {DiscPayoffWhite}/>
            <img src= {RuntimeRecordsWhite}/>
        </div>
        )
    } 
    
    else  {
        if (color == "black") {
            return(
            <div className= "BlackLogo">
                <img src= {DiscPayoff}/>
                <img src= {RuntimeRecords}/>
            </div> 
            )
        } 
        
        else  {
        return(
        <div className= "OrangeLogo">
            <img src= {RecordStoreDay}/>
            <img src= {DiscPayoffWhite}/>
        </div> 
        )
        }
    }
}

export default Logo