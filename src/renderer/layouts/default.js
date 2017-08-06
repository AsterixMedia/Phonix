import React from 'react'
import Route from 'react-router-dom/Route'
import { func } from 'prop-types'

import Container from '../containers/UiContainer'

const DefaultLayout = ({component: Component, ...rest}) =>
  <Route {...rest} render={matchProps => (
    <Container className='DefaultLayout'>
      <Component {...matchProps} />
    </Container>
  )} />

DefaultLayout.propTypes = {
  component: func
}

export default DefaultLayout
