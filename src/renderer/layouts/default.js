import React from 'react'
import Route from 'react-router-dom/Route'
import { func } from 'prop-types'

const DefaultLayout = ({component: Component, ...rest}) =>
  <Route {...rest} render={matchProps => (
    <div className='DefaultLayout'>
      <div className='Header'>Header</div>
      <Component {...matchProps} />
      <div className='Footer'>Footer</div>
    </div>
  )} />

DefaultLayout.propTypes = {
  component: func
}

export default DefaultLayout
