import React    from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import {
  CampusList,
  StudentList,
} from './index';

const Navbar = () => (
  <Menu secondary>
    <Menu.Item name="Home"     as={Link} to='/' />
    <Menu.Item name="Campuses" as={Link} to='/campuses' />
    <Menu.Item name="Students" as={Link} to='students' />
  </Menu>
)

export default Navbar;


