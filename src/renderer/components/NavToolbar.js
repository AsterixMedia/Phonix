import React from 'react'
import { Toolbar, NavLink } from 'rebass'
import Link from 'react-router-dom/Link'

const links = [
  {to: '/', name: 'Home'},
  {to: '/example', name: 'Example'},
  {to: '/audiobooks', name: 'Audiobooks'},
  {to: '/authors', name: 'Authors'}
]

const NavToolbar = () =>
  <Toolbar>
    {links.map((link, i) =>
      <NavLink key={i} is={Link} to={link.to}>
        {link.name}
      </NavLink>)
    }
  </Toolbar>

export default NavToolbar
