import React    from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import {
  AllCampuses
} from './index';

const Navbar = () => (
  <Menu secondary>
    <Menu.Item name="Home" />
    <Menu.Item name="Campuses" as={Link} to='/campuses' />
    <Menu.Item name="Students"/>
  </Menu>
)

export default Navbar;


