import React from 'react'
import { connect } from 'react-redux'
import Xray from 'react-x-ray'
import { Fixed, Container } from 'rebass'
import { node, bool, string } from 'prop-types'

import NavToolbar from '../components/NavToolbar'
import NavBar from '../components/NavBar'

const mapStateToProps = state => ({
  xray: state.ui.xray,
  currentPath: state.router.location.pathname
})

const mapDispatchToProps = {}

@connect(mapStateToProps, mapDispatchToProps)
class UiContainer extends React.Component {
  static propTypes = {
    children: node,
    xray: bool,
    currentPath: string
  }

  render = () =>
    <div>
      <Xray disabled={!this.props.xray}>
        <Fixed top width={1}>
          <NavToolbar />
          <NavBar currentPath={this.props.currentPath} />
        </Fixed>
        <Container mt={100}>
          {this.props.children}
        </Container>
      </Xray>
    </div>
}

export default UiContainer
