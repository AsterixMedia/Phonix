import React from 'react'
import Link from 'react-router-dom/Link'
import { Tabs, TabItem, Flex, Select, Button } from 'rebass'
import { array, string } from 'prop-types'

import Icon from '../components/Icon'

const navLinks = [
  { to: '/audiobooks', name: 'Audiobooks' },
  { to: '/authors', name: 'Authors' },
  { to: '/genres', name: 'Genres' }
]
const NavBar = ({links = navLinks, currentPath}) =>
  <Flex px={10} justify='space-between' align='center'>
    <Button px={1} py={1} disabled>
      <Icon>
        refresh
      </Icon>
    </Button>
    <Tabs ml={50}>
      {links.map((link, i) =>
        <TabItem
          m={2}
          key={i}
          is={Link}
          children={link.name}
          active={currentPath === link.to}
          to={link.to} />
      )}
    </Tabs>
    <Select width={100} disabled>
      <option>Name</option>
      <option>Recent</option>
    </Select>
  </Flex>

NavBar.propTypes = {
  links: array,
  currentPath: string
}

export default NavBar
