import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMobile} from '@fortawesome/free-solid-svg-icons'
import {faWifi} from '@fortawesome/free-solid-svg-icons'
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
function Recharge()
{
   return(
    <div id='rechargeblock'>
       <div id='headingblock'><p>Recharge and Pay Bills</p>
            <button>Pay Bills</button>
       </div>
       <div id='reachargeicon'>
           <div id='favrechicon'>
            <div><FontAwesomeIcon icon={faMobile} /></div>
            <p>Mobile Recharge</p>
           </div >
           <div id='favrechicon'>
            <div><FontAwesomeIcon icon={faWifi} /></div>
            <p>DTH payments</p>
           </div>
           <div id='favrechicon'>
            <div><FontAwesomeIcon icon={faLightbulb} /></div>
            <p>Electricity</p>
           </div>
           <div id='favrechicon'>
            <div><FontAwesomeIcon icon={faCreditCard} /></div>
            <p>Credit card</p>
           </div>
       </div>
       <div id='reachargeicon'>
            <div id='favrechicon'>
            <div ><FontAwesomeIcon icon={faHouse} /></div>
            <p>Rent payment</p>
           </div>
           <div id='favrechicon'>
            <div><FontAwesomeIcon icon={faMoneyBillTransfer} /></div>
            <p>Loan repayment</p>
           </div>
           <div id='favrechicon'>
            <div><FontAwesomeIcon icon={faGasPump} /></div>
            <p>Petrol & Diesel</p>
           </div>
           <div id='favrechicon'>
            <div><FontAwesomeIcon icon={faBus} /></div>
            <p>Ticket</p>
           </div>
       </div>
    </div>
   )
}
export default Recharge