import React from 'react'
import Switch from 'react-router-dom/Switch'

import DefaultLayout from './layouts/default'
import HomePage from './pages/home'
import ExamplePage from './pages/example'

class App extends React.Component {
  render = () =>
    <div>
      <h2>Welcome to React!</h2>
      <Switch>
        <DefaultLayout exact path='/' component={HomePage} />
        <DefaultLayout path='/example' component={ExamplePage} />
      </Switch>
    </div>
}

export default App
