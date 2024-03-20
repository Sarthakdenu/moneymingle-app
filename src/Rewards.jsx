import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
function Rewards()
{
    return (
        <div id='reawrdblack'>
            <div className="rewards">
                <div id='iconform'><FontAwesomeIcon icon={faWallet} /></div>
             <p>Money Wallet</p>
            </div>
            <div className="rewards">
            <div id='iconform'><FontAwesomeIcon icon={faTrophy} /></div>
                <p>Rewards</p>
            </div>
            <div className="rewards">
            <div id='iconform'><FontAwesomeIcon icon={faPhoneVolume} /></div>
               <p>Refer & Get</p> 
            </div>
        </div>
    )
}

export default Rewards;