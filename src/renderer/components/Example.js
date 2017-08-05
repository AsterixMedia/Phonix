import React from 'react'
import { number, func } from 'prop-types'

const Example = ({ score, add, substract }) =>
  <div>
    <span>{score}</span>
    <button onClick={add}>Add +</button>
    <button onClick={substract}>Substract -</button>
  </div>

Example.propTypes = {
  score: number,
  add: func,
  substract: func
}

export default Example
