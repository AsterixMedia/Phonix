import React from 'react'
import { Small } from 'rebass'
import { string } from 'prop-types'

const Icon = ({children}, props) => children.indexOf('mdi-') > -1
  ? <Small style={{verticalAlign: 'middle'}} {...props} className={`mdi ${children}`} />
  : <Small style={{verticalAlign: 'middle'}} className='material-icons' {...props}>{children}</Small>

Icon.propTypes = {
  children: string
}

export default Icon
