import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faPersonWalkingArrowLoopLeft } from '@fortawesome/free-solid-svg-icons';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
function Transfermoney()
{
    return(
        <div>
        <div className="row" id='tranferblock'>
            <div className="tranferheading">
                Transfer Money
            </div>
            <div className="options">
                <div className="categories">
                <button><div id='tranferfav'><FontAwesomeIcon icon={faUserCheck} /></div></button>
                <p>To Number</p>
                </div>
                <div className="categories">
                <button><div id='tranferfav'><FontAwesomeIcon icon={faBuildingColumns} /></div> </button>
                <p>To Account</p>  
                </div>
                <div className="categories">
                <button><div id='tranferfav'><FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} /></div></button>
                <p>Self Acoount</p>
                </div>
                <div className="categories">
                <button><div id='tranferfav'><FontAwesomeIcon icon={faScaleBalanced} /></div></button>
                <p>Check Balance</p>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Transfermoney