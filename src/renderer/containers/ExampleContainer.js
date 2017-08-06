import React from 'react'
import { connect } from 'react-redux'
import { number, func } from 'prop-types'

import Example from '../components/Example'
import { add, substract } from '../../common/actions'

const mapStateToProps = state => ({
  score: state.example.score
})

const mapDispatchToProps = {
  add,
  substract
}

@connect(mapStateToProps, mapDispatchToProps)
class ExampleContainer extends React.Component {
  static propTypes = {
    score: number,
    add: func,
    substract: func
  }

  render = () =>
    <div>
      <Example
        add={this.props.add}
        substract={this.props.substract}
        score={this.props.score} />
    </div>
}

export default ExampleContainer
