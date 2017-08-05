import React from 'react'
import Switch from 'react-router-dom/Switch'

import DefaultLayout from './layouts/default'
import HomePage from './pages/home'

class App extends React.Component {
  render = () =>
    <div>
      <h2>Welcome to React!</h2>
      <Switch>
        <DefaultLayout path='/' component={HomePage} />
      </Switch>
    </div>
}

export default App
