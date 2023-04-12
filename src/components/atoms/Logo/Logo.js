import PropTypes from 'prop-types'

import RecordStoreDay from '../../../resources/img/record-store-day.svg'
import DiscPayoffWhite from '../../../resources/img/disc-payoff-white.svg'
import DiscPayoff from '../../../resources/img/disc-payoff.svg'
import RuntimeRecordsWhite from '../../../resources/img/runtime-records-logo-white.svg'
import RuntimeRecords from '../../../resources/img/runtime-records-logo.svg'

/// TODO: Define props for Logo
const Logo = ({color, style, active}) => {


    if (color === "white") {
        return(
        <div className="WhiteLogo">
            <img classsName='Logo' src= {DiscPayoffWhite}/>
            <img className='Name' src= {RuntimeRecordsWhite}/>
        </div>
        )
    } 
    
    else  {
        if (color == "black") {
            return(
            <div className= "BlackLogo">
                <img className='Logo' src= {DiscPayoff}/>
                <img className='Name' src= {RuntimeRecords} 
                     style={{display: active ? 'none' : 'block'}}
                    />
            </div> 
            )
        } 
        
        else  {
        return(
        <div className= "OrangeLogo">
            <img className='Name' src= {RecordStoreDay}/>
            <img className='Logo' src= {DiscPayoffWhite}/>
        </div> 
        )
        }
    }
}

export default Logo