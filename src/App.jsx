import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Account from './Account'; 
import Formi from './Formi';
import Home from './Home';
import Profile from './Profile';
import Transaction from './Transaction';
import Bank from './Bank';
import Transfer from './Transfer';

const App = () => {
  return (
    <Router>
      <div >
        <nav id='navbar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Account</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/payment">Transaction</Link>
            </li>
            <li>
              <Link to="/Bank">Bank</Link>
            </li>
            <li>
              <Link to="/transfer">Transfer</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route exact path="/" element={<Formi />} />
          <Route path="/about" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Transaction />} />
          <Route path="/Bank" element={<Bank />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
