import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Transaction() {
    const [otp, setOtp] = useState(Array(6).fill(''));

    const handleButtonClick = (value) => {
        const updatedOtp = [...otp];
        const emptyIndex = updatedOtp.findIndex((digit) => digit === '');

        if (emptyIndex !== -1) {
            updatedOtp[emptyIndex] = value.toString();
            setOtp(updatedOtp);
        }
    };

    const handleDelete = () => {
        const updatedOtp = [...otp];
        const firstEmptyIndex = updatedOtp.findIndex((digit) => digit === '');
    
        if (firstEmptyIndex !== -1) {
            updatedOtp[firstEmptyIndex - 1] = '';
            setOtp(updatedOtp);
        }
    };
    

    return (
        <div id='transactionblock'>
        <div id='transheading'>
          <div id='part1'>
         <div id='bankname'>Punjab_National_Bank</div>
          <p>XXXXXX6237</p>
             </div>
             <div id='transupi'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1024px-UPI-Logo-vector.svg.png" alt="" />
              </div>
         </div>
        <div id='checkbalanace'>
              <p>Check Balance</p>
         </div>
         <div id='mainpin'>
           <p>ENTER 6-DIGIT UPI PIN</p>
          <div id='otp'>
             {otp.map((digit, index) => (
             <span key={index}>{digit}</span>
             ))}
          </div>
            </div>
            <div id='securebox'>
                <div id='securecontent'>
                    <p>UPI PIN will keep your Account
                        Secure from unauthorized access .Do
                        not share this Pin with anyone</p>
                </div>
            </div>
            <div id='keypad'>
                <div id='keypadcol'>
                    {[1, 2, 3].map((digit) => (
                        <button key={digit} onClick={() => handleButtonClick(digit)}>
                            {digit}
                        </button>
                    ))}
                </div>
                <div id='keypadcol'>
                    {[4, 5, 6].map((digit) => (
                        <button key={digit} onClick={() => handleButtonClick(digit)}>
                            {digit}
                        </button>
                    ))}
                </div>
                <div id='keypadcol'>
                    {[7, 8, 9].map((digit) => (
                        <button key={digit} onClick={() => handleButtonClick(digit)}>
                            {digit}
                        </button>
                    ))}
                </div>
                <div id='keypadcol'>
                    <button onClick={handleDelete}><FontAwesomeIcon icon={faDeleteLeft} /></button>
                    <button onClick={() => handleButtonClick(0)}>0</button>
                    <button><FontAwesomeIcon icon={faCircleCheck} /></button>
                </div>
            </div>
        </div>
    );
}

export default Transaction;
