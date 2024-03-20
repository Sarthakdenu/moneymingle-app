import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMotorcycle} from '@fortawesome/free-solid-svg-icons'
import {faCarSide} from '@fortawesome/free-solid-svg-icons'
import {faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import {faNotesMedical}from '@fortawesome/free-solid-svg-icons';
import{faHeartPulse} from '@fortawesome/free-solid-svg-icons';
import {faPersonFallingBurst}from '@fortawesome/free-solid-svg-icons';
import {faEarthAmericas} from '@fortawesome/free-solid-svg-icons';
import {faRotate} from '@fortawesome/free-solid-svg-icons';
function Insurance()
{
   return(
    <div id='rechargeblock'>
       <div id='headingblockpart2'><p>Insurance</p>
       </div>
       <div id='reachargeiconpart2'>
           <div id='favriconpart2'>
            <div><FontAwesomeIcon icon={faMotorcycle} /></div>
            <p>Bike</p>
           </div >
           <div id='favriconpart2'>
            <div><FontAwesomeIcon icon={faCarSide} /></div>
            <p>Car</p>
           </div>
           <div id='favriconpart2'>
            <div><FontAwesomeIcon icon={faNotesMedical} /></div>
            <p>Health</p>
           </div>
           <div id='favriconpart2'>
            <div><FontAwesomeIcon icon={faPersonFallingBurst} /></div>
            <p>Accident</p>
           </div>
       </div>
       <div id='reachargeiconpart2'>
            <div id='favriconpart2'>
            <div ><FontAwesomeIcon icon={faHeartPulse} /></div>
            <p>Term life</p>
           </div>
           <div id='favriconpart2'>
            <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
            <p>Travel</p>
           </div>
           <div id='favriconpart2'>
            <div><FontAwesomeIcon icon={faRotate} /></div>
            <p>Renewable</p>
           </div>
           <div id='favriconpart2'>
            <div><FontAwesomeIcon icon={faPeopleGroup} /></div>
            <p>Family</p>
           </div>
       </div>
    </div>
   )
}
export default Insurance