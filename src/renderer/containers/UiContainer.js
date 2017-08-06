import React from 'react'
import { connect } from 'react-redux'
import Xray from 'react-x-ray'
import { node, bool } from 'prop-types'

const mapStateToProps = state => ({
  xray: state.ui.xray
})

const mapDispatchToProps = {}

@connect(mapStateToProps, mapDispatchToProps)
class UiContainer extends React.Component {
  static propTypes = {
    children: node,
    xray: bool
  }

  render = () =>
    <div>
      <Xray disabled={!this.props.xray}>
        {this.props.children}
      </Xray>
    </div>
}

export default UiContainer
