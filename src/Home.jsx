import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Imageslider from './Imageslider';
import Transfermoney from './Tranfermoney';
import Upid from './Upid';
import Rewards from './Rewards';
import Pinless from './Pinless';
import Recharge from './Recharge';
import Insurance from './Insurance';
function Home()
{
    return(
        <div>
            <Navbar />
            <Imageslider />
            <Transfermoney />
            <Upid />
            <Rewards />
            <Pinless />
            <Recharge />
            <Insurance />
        </div>
    )
}
export default Home