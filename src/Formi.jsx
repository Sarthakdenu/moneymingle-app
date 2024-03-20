
import React,{useState} from 'react';
import Registration from './Registration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SocialMediaButtons from './SocialMediaButtons';
function Formi()
{
  const [istermi, setIstermi] = useState(false);

  function switching(event) {
    event.preventDefault();
    setIstermi(true);
  }

  function switchingonlogin(event) {
    event.preventDefault();
    setIstermi(false);
  }

  return(
    <div id='registrationpage'>
        <h1 id='mainheading'>MONEYMINGLE</h1>
        <div  id='details'>
           <div className='row'>
            <div className='col-6' id='login'>
               <a href="" onClick={switchingonlogin}>Login</a>
            </div>
            <div className='col-6' id='signup'>
            <a href="" onClick={switching}>SignUp</a>
            </div>
           </div>
        </div>
     { istermi?  <Registration name="text" placeholder="Enter Your First Name" icon={<FontAwesomeIcon icon={faUser} />}/>:null }
     { istermi?  <Registration name="text" placeholder="Enter Your last Name" icon={<FontAwesomeIcon icon={faUser} />}/>:null }
       { istermi?  <Registration name="number" placeholder="Enter Your Number" icon={<FontAwesomeIcon icon={faPhoneVolume} />}/>:null }
        <Registration name="email" placeholder="Enter Your First Email" icon={<FontAwesomeIcon icon={faEnvelope} />}/>
        { istermi?   <Registration name="password" placeholder="Set Password" icon={<FontAwesomeIcon icon={faLock} />}/>:null }
        <Registration name="password" placeholder="confirm Password" icon={<FontAwesomeIcon icon={faLock}/>}/>
        <button type="button" class="btn btn-danger" id='submitbutton'>Submit</button>
        { istermi?   <button type="button" class="btn btn-success" id='signbutton'>Sign in by Google</button>:null }
       { istermi?  <button type="button" class="btn btn-primary" id='signbutton'>Sign in by Facebook</button>:null }
    </div>
  );
}
export default Formi;