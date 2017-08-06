import React from 'react'
import Switch from 'react-router-dom/Switch'
import { Helmet } from 'react-helmet'

import DefaultLayout from './layouts/default'
import HomePage from './pages/home'
import ExamplePage from './pages/example'
import AudibooksPage from './pages/audiobooks'
import AuthorsPage from './pages/authors'
import GenresPage from './pages/genres'

class App extends React.Component {
  render = () =>
    <div>
      <Helmet defaultTitle='Phonix'
        titleTemplate='Phonix - %s'>
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet' />
        <link href='https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css'
          rel='stylesheet' />
      </Helmet>
      <Switch>
        <DefaultLayout exact path='/' component={HomePage} />
        <DefaultLayout path='/example' component={ExamplePage} />
        <DefaultLayout path='/audiobooks' component={AudibooksPage} />
        <DefaultLayout path='/authors' component={AuthorsPage} />
        <DefaultLayout path='/genres' component={GenresPage} />
      </Switch>
    </div>
}

export default App
