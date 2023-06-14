import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
    return (
        <nav>
          <ul className="navigation">
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/publications">Publications</Link>
            </li>
            <li>
                <Link to ="/pictures">Pictures</Link>
            </li>
            <li>
                <Link to ="/contacts">Contacts</Link>
            </li>
          </ul>
      </nav>
    );
};

export default NavBar;