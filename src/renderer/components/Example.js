import React from 'react'
import { number, func } from 'prop-types'
import { Button } from 'rebass'

const Example = ({ score, add, substract }) =>
  <div>
    <span>{score}</span>
    <Button onClick={add}>Add +</Button>
    <Button onClick={substract}>Substract -</Button>
  </div>

Example.propTypes = {
  score: number,
  add: func,
  substract: func
}

export default Example
