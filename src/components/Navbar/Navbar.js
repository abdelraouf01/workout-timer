import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <motion.h1
        drag
        dragConstraints={{ right: 0, left: 0, bottom: 0, top: 0 }}
        className={classes.Logo}
      >
        2oofa Timer
      </motion.h1>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            activeStyle={{
              color: 'black',
              fontFamily: 'Dancing Script',
              fontSize: '1.5rem',
              textDecoration: 'underline',
            }}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/feedback"
            activeStyle={{
              color: 'black',
              fontFamily: 'Dancing Script',
              fontSize: '1.5rem',
              textDecoration: 'underline',
            }}
          >
            Feedback
          </NavLink>{' '}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
