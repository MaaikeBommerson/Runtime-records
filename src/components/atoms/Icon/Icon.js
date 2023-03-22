import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas, fab)


const Icon = () => {
    const icon = 'fa-cart-shopping'
    return (
          <FontAwesomeIcon
              icon={ icon }
              className={`Icon`}
          />
    )
}


export default Icon