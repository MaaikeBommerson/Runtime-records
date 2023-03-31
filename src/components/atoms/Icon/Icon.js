import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas, fab)


const Icon = ({icon, className}) => {
    

    return (
          <FontAwesomeIcon
              icon={ icon }
              className={className} 
          />
    )
}


// werkt niet, maar in ieder geval nu zonder foutmeldingen

export default Icon