import {useNavigate, useLocation, Route } from "react-router-dom";
import {ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as PersonOutlineIcon} from '../assets/svg/personOutlineIcon.svg'

function Navbar(){
     const navigate=useNavigate()
     const location=useLocation()
     const pathmatchRoute=(route) =>{
          if (route === location.pathname)
          {
               return true
          }
     }
return (
<footer className="navbar" >
    <nav className="navbarNav">
      <ul className="navbarListItems">
          <li className="navbarListItems" onClick={ ()=> navigate ('/')}>
              <ExploreIcon fill={pathmatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width ='36px' height='36px'/>
              <p className={pathmatchRoute('/') ? 'navbarListItemNameActive': 'navbarListItemName'}>Explore</p>
         </li>
         <li className="navbarListItems" onClick={ ()=> navigate ('/offers')}>
              <OfferIcon fill={pathmatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'} width ='36px' height='36px'/>
              <p className={pathmatchRoute('/offers') ? 'navbarListItemNameActive': 'navbarListItemName'}>Offer</p>
         </li>
         <li className="navbarListItems" onClick={ ()=> navigate ('/profile ') }>
              <PersonOutlineIcon fill={pathmatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} width ='36px' height='36px'/>
              <p className={pathmatchRoute('/profile') ? 'navbarListItemNameActive': 'navbarListItemName'}>Profile</p>
         </li>
      </ul>
    </nav>
</footer>

)

}

export default Navbar


