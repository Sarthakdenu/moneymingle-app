import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
function Upid()
{
    return (
        <div id='upiidblock'>
          <p id='recieveheading'>Recieve Money</p>
          <div id='upid'>
           <div id='imgi'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1024px-UPI-Logo-vector.svg.png" alt="" /></div>
           <p>Upi id: 97139635663@sbi.com</p>
           <div id='rightarrow'>
          <FontAwesomeIcon icon={faCaretRight} />
          </div>
          </div>

         
        </div>
    )
}

export default Upid