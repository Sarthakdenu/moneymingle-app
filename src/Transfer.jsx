import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faArrowsSplitUpAndLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Number from './Number';
function Transfer() {
    const [item, setItem] = useState([]);
    const [text, setText] = useState({ name: "", number: "", amount: 0 });
    const [open, setOpen] = useState(false);

  
    function handleChange(event) {
      const { name, value } = event.target;
      setText((prevItem) => {
        return {
          ...prevItem,
          [name]: value,
        };
      });
    }
  
    function additem(event) {
      event.preventDefault();
      setItem((previtem) => {
        return [...previtem, text];
      });
      setText({
        name: "",
        number: "",
        amount: 0,
      });
    }
  
    function opening() {
      setOpen(!open);
    }
    function getamount() {
        if (open) {
          const totalAmount = text.amount; 
          const numberOfItems = item.length;
    
          if (numberOfItems > 0) {
            return totalAmount / numberOfItems;
          } else {
            console.error("Cannot split money with zero items");
            return 0;
          }
        } else {
          return 0;
        }
      }
      function closing()
      {
        setOpen(!open);
      }
      function handleDelete(id) {
        setItem((prevItems) => prevItems.filter((item, index) => index !== id));
      }
    
  return (
    <div id='transferheader'>
        <div id='transferheading'>
           <div id='fti'><FontAwesomeIcon icon={faArrowLeft} /></div>
            <h3>Send Money</h3>
        </div>
      <div id='trasnfertechniq'>
        <div id='transferfunctinal'>
          <button ><FontAwesomeIcon icon={faUserTie} /></button>
          <p>New Payment</p>
        </div>
        <div id='transferfunctinal'>
          <button  onClick={opening}><FontAwesomeIcon icon={faArrowsSplitUpAndLeft} /></button>
          <p>Split</p>
        </div>
      </div>
      <div id='transferinput'>
      <input type='text'  className="form-control" name='name' placeholder="Enter the name" onChange={handleChange} value={text.name} />
      <input type='number'  className="form-control" name='number' placeholder="Enter the number" aria-describedby="basic-addon1" onChange={handleChange}  value={text.number}/>
      <button onClick={additem}>Add Number</button>
    { open? <input type='number'  className="form-control" name='amount' placeholder="Enter the amount to contray" aria-describedby="basic-addon1" onChange={handleChange}  value={text.amount}/>:null}
    { open?   <button onClick={closing}>Splitmoney</button>:null}
      </div>
      <div id='transferheading'>
            <h3>Contacts:</h3>
        </div>
      <div id='contactlist'>
    {
        item.map((item,id)=><Number 
          name = {item.name}
          number = {item.number}
          amount = {getamount()}
          id = {id}
          key = {item.id}
          onDelete = {handleDelete}
        />)
    }
      </div>
    </div>
  )
}

export default Transfer
