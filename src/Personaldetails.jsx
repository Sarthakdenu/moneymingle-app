import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

function Personaldetails() {
    const [istermi, setterm] = useState(false);
    const [text, intputtext] = useState("User-Name");
    const [number, intputnumber] = useState("User-Number");
    const [email, intputemail] = useState("User-Email");
    const [img, setimg] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [open,setopen] = useState(true)
    function changing(event) {
        var name = event.target.name;
        intputtext(event.target.value);
    }

    function changing2(event) {
        var number = event.target.number;
        intputnumber(event.target.value);
    }

    function changing3(event) {
        var email = event.target.email;
        intputemail(event.target.value);
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setimg(reader.result);
            };
            reader.readAsDataURL(file);
            setImageFile(file);
        }
    }

    function dochange() {
        if (istermi === false) {
            
            setterm(true);
            setopen(false)
        } else {
            setopen(true)
            setterm(false);
        }
    }

    function chngimg(event) {
        event.preventDefault();
    }

    return (
        <div id='personaldetailblock'>
            <div id='pdimg'>
                {open?<img src={img} alt="" />:null}
            </div>
            <div id='pdheading'>
                <p>Personal Details</p>
                <div id='specialbn'>
                    <button onClick={dochange}><FontAwesomeIcon icon={faPen} /></button>
                    <label>
                        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                        <FontAwesomeIcon icon={faCameraRetro} onClick={() => document.getElementById('image').click()} />
                    </label>
                </div>
            </div>
            <div id='mainpd'>
            {open? <h3>{text}</h3> :null}
                <p>{number}</p>
                <p>{email}</p>
            </div>
            {istermi ?
                <div id='inputblockiii'>
                    <input type='text' className="form-control" name='name' placeholder="change your name" aria-describedby="basic-addon1" onChange={changing} value={text} />
                    <input type="number" className="form-control" placeholder="change your number" aria-describedby="basic-addon1" onChange={changing2} value={number} />
                    <input type="email" className="form-control" placeholder="change your email" aria-describedby="basic-addon1" onChange={changing3} value={email} />
                    <form action="/upload" method="post" enctype="multipart/form-data">
                        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                        <input type="submit" value="Upload" placeholder='submit your image' onClick={chngimg} />
                        <button type='submit' onClick={dochange}>submit</button>
                    </form>
                </div> : null}
        </div>
    );
}

export default Personaldetails;
