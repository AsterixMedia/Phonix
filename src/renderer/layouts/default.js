import React from 'react'
import Route from 'react-router-dom/Route'
import Link from 'react-router-dom/Link'
import { func } from 'prop-types'

const DefaultLayout = ({component: Component, ...rest}) => (
  <Route {...rest} render={matchProps => (
    <div className='DefaultLayout'>
      <div className='Header'>
        Header
        <Link to='/example'>Example</Link>
      </div>
      <Component {...matchProps} />
      <div className='Footer'>Footer</div>
    </div>
  )} />
)

DefaultLayout.propTypes = {
  component: func
}

export default DefaultLayout
