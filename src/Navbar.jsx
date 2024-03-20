import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    return(
        <div id='navigation-home'>
          <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <FontAwesomeIcon icon={faUserGear} /> SARTHAK VYAS
       </a>

      <ul class="dropdown-menu">
       <li><a class="dropdown-item" href="#">Add Bank Account</a></li>
      <li><a class="dropdown-item" href="#">Add wallet</a></li>
      <li><a class="dropdown-item" href="#">Profile</a></li>
    </ul>
    </div>
        <div id='favgroup'>
       <div id='favicons'><FontAwesomeIcon icon={faBell} /></div> 
       <div id='favicons'>  <FontAwesomeIcon icon={faQrcode} /></div> 
       <div id='favicons'> <FontAwesomeIcon icon={faCircleInfo} /></div> 
       <div id='favicons'> <FontAwesomeIcon icon={faGears} /></div> 
        </div>
        </div>
    )
}
export default Navbar