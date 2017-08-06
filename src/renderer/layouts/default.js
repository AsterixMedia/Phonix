import React from 'react'
import Route from 'react-router-dom/Route'
import Link from 'react-router-dom/Link'
import { func } from 'prop-types'
import { Toolbar, NavLink } from 'rebass'

import Container from '../containers/UiContainer'

const links = [
  {to: '/', name: 'Home'},
  {to: '/example', name: 'Example'}
]

const DefaultLayout = ({component: Component, ...rest}) =>
  <Route {...rest} render={matchProps => (
    <Container className='DefaultLayout'>
      <div className='Header'>
        <Toolbar>
          {links.map((link, i) =>
            <NavLink key={i} is={Link} to={link.to}>
              {link.name}
            </NavLink>)
          }
        </Toolbar>
      </div>
      <Component {...matchProps} />
      <div className='Footer'>Footer</div>
    </Container>
  )} />

DefaultLayout.propTypes = {
  component: func
}

export default DefaultLayout
